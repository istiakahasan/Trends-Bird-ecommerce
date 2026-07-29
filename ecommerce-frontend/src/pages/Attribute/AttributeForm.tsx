import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { api } from '../../api/client';
import { Button } from '../../components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { toast } from 'sonner';
import { ArrowLeft, Save, Loader2, Plus, Edit, Trash2 } from 'lucide-react';
import { PermissionGuard } from '../../components/PermissionGuard';

const attributeSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  slug: z.string().min(1, 'Slug is required'),
  type: z.string().min(1, 'Type is required'),
});

type AttributeFormValues = z.infer<typeof attributeSchema>;

export const AttributeForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<any[]>([]);
  
  // Value Management State
  const [valueForm, setValueForm] = useState({ value: '', slug: '', reference: '' });
  const [editingValueId, setEditingValueId] = useState<number | null>(null);
  const [valueLoading, setValueLoading] = useState(false);
  
  const isEditing = !!id;

  const form = useForm<AttributeFormValues>({
    resolver: zodResolver(attributeSchema) as any,
    defaultValues: {
      name: '',
      slug: '',
      type: 'dropdown',
    },
  });

  const fetchAttribute = async () => {
    try {
      const res = await api.get(`/attribute/${id}`);
      const attr = res.data.data;
      form.reset({
        name: attr.name,
        slug: attr.slug,
        type: attr.type,
      });
      setValues(attr.values || []);
    } catch (error) {
      toast.error('Failed to load attribute data');
    }
  };

  useEffect(() => {
    if (isEditing && id) {
      fetchAttribute();
    }
  }, [id, isEditing]);

  const onSubmit = async (data: AttributeFormValues) => {
    setLoading(true);
    try {
      if (isEditing) {
        await api.patch(`/attribute/${id}`, data);
        toast.success('Attribute updated successfully');
      } else {
        await api.post('/attribute', data);
        toast.success('Attribute created successfully');
        navigate('/attributes');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to save attribute');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveValue = async () => {
    if (!valueForm.value || !valueForm.slug) {
      toast.error('Value and slug are required');
      return;
    }
    setValueLoading(true);
    try {
      if (editingValueId) {
        await api.patch(`/attribute/value/${editingValueId}`, valueForm);
        toast.success('Value updated');
      } else {
        await api.post(`/attribute/${id}/value`, valueForm);
        toast.success('Value added');
      }
      setValueForm({ value: '', slug: '', reference: '' });
      setEditingValueId(null);
      fetchAttribute();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to save value');
    } finally {
      setValueLoading(false);
    }
  };

  const handleDeleteValue = async (valueId: number) => {
    try {
      await api.delete(`/attribute/value/${valueId}`);
      toast.success('Value deleted');
      fetchAttribute();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to delete value');
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/attributes')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold">{isEditing ? 'Edit Attribute' : 'Create New Attribute'}</h2>
          <p className="text-gray-500 text-sm">
            {isEditing ? 'Manage attribute and its values' : 'Add a new attribute definition'}
          </p>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit as any)} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control as any}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Attribute Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="e.g. Size" onChange={(e) => {
                          field.onChange(e);
                          if (!isEditing) {
                            form.setValue('slug', e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
                          }
                        }}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control as any}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="e.g. size" className="font-mono" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control as any}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Display Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="dropdown">Dropdown</SelectItem>
                        <SelectItem value="radio">Radio</SelectItem>
                        <SelectItem value="checkbox">Checkbox</SelectItem>
                        <SelectItem value="colour swatch">Colour Swatch</SelectItem>
                        <SelectItem value="image swatch">Image Swatch</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-4 pt-4">
                <Button type="submit" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  <Save className="mr-2 h-4 w-4" />
                  {isEditing ? 'Update Attribute' : 'Create Attribute'}
                </Button>
                <Button variant="outline" type="button" onClick={() => navigate('/attributes')}>
                  {isEditing ? 'Done' : 'Cancel'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isEditing && (
        <PermissionGuard permission="attribute:update">
          <Card>
            <CardHeader>
              <CardTitle>Manage Values</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Value List */}
              {values.length > 0 ? (
                <div className="border rounded-lg divide-y">
                  {values.map(val => (
                    <div key={val.id} className="p-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        {val.reference && (
                          <div 
                            className="h-6 w-6 rounded-full border shadow-sm"
                            style={{ backgroundColor: val.reference.startsWith('#') ? val.reference : 'transparent', backgroundImage: val.reference.startsWith('http') ? `url(${val.reference})` : 'none', backgroundSize: 'cover' }}
                          />
                        )}
                        <div>
                          <p className="font-semibold text-sm">{val.value}</p>
                          <p className="text-xs text-gray-500 font-mono">{val.slug}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => {
                          setEditingValueId(val.id);
                          setValueForm({ value: val.value, slug: val.slug, reference: val.reference || '' });
                        }}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500" onClick={() => handleDeleteValue(val.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 border border-dashed rounded-lg text-gray-500 text-sm">
                  No values added yet.
                </div>
              )}

              {/* Add / Edit Value Form */}
              <div className="bg-gray-50 p-4 rounded-lg border space-y-4">
                <h4 className="font-semibold text-sm">{editingValueId ? 'Edit Value' : 'Add New Value'}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input 
                    placeholder="Name (e.g. Red)" 
                    value={valueForm.value}
                    onChange={(e) => {
                      const val = e.target.value;
                      setValueForm(prev => ({
                        ...prev,
                        value: val,
                        ...( !editingValueId ? { slug: val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') } : {} )
                      }));
                    }}
                  />
                  <Input 
                    placeholder="Slug (e.g. red)" 
                    className="font-mono"
                    value={valueForm.slug}
                    onChange={(e) => setValueForm(prev => ({ ...prev, slug: e.target.value }))}
                  />
                  <Input 
                    placeholder="Ref (Hex or URL)" 
                    value={valueForm.reference}
                    onChange={(e) => setValueForm(prev => ({ ...prev, reference: e.target.value }))}
                  />
                </div>
                <div className="flex gap-2">
                  <Button size="sm" onClick={handleSaveValue} disabled={valueLoading}>
                    {valueLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {editingValueId ? 'Update Value' : 'Add Value'}
                  </Button>
                  {editingValueId && (
                    <Button size="sm" variant="ghost" onClick={() => {
                      setEditingValueId(null);
                      setValueForm({ value: '', slug: '', reference: '' });
                    }}>
                      Cancel Edit
                    </Button>
                  )}
                </div>
              </div>

            </CardContent>
          </Card>
        </PermissionGuard>
      )}
    </div>
  );
};
