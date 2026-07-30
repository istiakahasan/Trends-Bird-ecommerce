import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/client';
import { PageHeader } from '../../components/common/PageHeader';
import { DataTable } from '../../components/common/DataTable';
import { SearchFilterBar } from '../../components/common/SearchFilterBar';
import { PermissionGuard } from '../../components/PermissionGuard';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { toast } from 'sonner';
import { Edit, Trash2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../../components/ui/alert-dialog';

export const AttributeList = () => {
  const [attributes, setAttributes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ page: 1, limit: 10, total: 0 });
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ type: '' });
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchAttributes = async () => {
    setLoading(true);
    try {
      const res = await api.get('/attribute', {
        params: { 
          page: pagination.page, 
          limit: pagination.limit, 
          search: search || undefined,
          ...filters,
        },
      });
      setAttributes(res.data.data);
      setPagination({ ...pagination, total: res.data.meta?.total || res.data.data.length });
    } catch (error) {
      toast.error('Failed to fetch attributes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttributes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.page, search, filters]);

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await api.delete(`/attribute/${deleteId}`);
      toast.success('Attribute deleted successfully');
      fetchAttributes();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to delete attribute');
    } finally {
      setDeleteId(null);
    }
  };

  const columns = [
    { key: 'name', header: 'Name', className: 'font-medium' },
    { 
      key: 'slug', 
      header: 'Slug',
      render: (attr: any) => (
        <span className="font-mono text-xs bg-gray-50 px-2 py-1 rounded text-gray-600">{attr.slug}</span>
      )
    },
    {
      key: 'type',
      header: 'Type',
      render: (attr: any) => (
        <Badge variant="outline" className="capitalize">
          {attr.type}
        </Badge>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (attr: any) => (
        <div className="flex gap-2">
          <PermissionGuard permission="attribute:update">
            <Link to={`/attributes/${attr.id}/edit`}>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Edit className="h-4 w-4" />
              </Button>
            </Link>
          </PermissionGuard>
          <PermissionGuard permission="attribute:delete">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-red-500 hover:text-red-700"
              onClick={() => setDeleteId(attr.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </PermissionGuard>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Attributes"
        description="Manage product variation attributes like Size and Color"
        createButton={{
          label: 'New Attribute',
          href: '/attributes/create',
          permission: 'attribute:create',
        }}
      />

      <SearchFilterBar
        searchPlaceholder="Search by name or slug..."
        onSearch={setSearch}
        filters={[
          {
            key: 'type',
            label: 'Type',
            options: [
              { value: 'dropdown', label: 'Dropdown' },
              { value: 'radio', label: 'Radio' },
              { value: 'checkbox', label: 'Checkbox' },
              { value: 'colour swatch', label: 'Colour Swatch' },
              { value: 'image swatch', label: 'Image Swatch' },
            ],
          },
        ]}
        onFilterChange={(key, value) => setFilters({ ...filters, [key]: value === 'all' ? '' : value })}
        onClear={() => {
          setSearch('');
          setFilters({ type: '' });
        }}
      />

      <DataTable
        data={attributes}
        columns={columns}
        loading={loading}
      />

      {pagination.total > pagination.limit && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing {attributes.length} of {pagination.total} attributes
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={pagination.page <= 1}
              onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
            >
              Previous
            </Button>
            <span className="flex items-center px-2 text-sm">
              Page {pagination.page} of {Math.ceil(pagination.total / pagination.limit)}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={pagination.page >= Math.ceil(pagination.total / pagination.limit)}
              onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. You cannot delete an attribute if its values are currently being used by any product variants.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
