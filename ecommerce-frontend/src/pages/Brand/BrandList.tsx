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

export const BrandList = () => {
  const [brands, setBrands] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ page: 1, limit: 10, total: 0 });
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ status: '' });
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchBrands = async () => {
    setLoading(true);
    try {
      const res = await api.get('/brand', {
        params: { 
          page: pagination.page, 
          limit: pagination.limit, 
          search: search || undefined,
          ...filters,
        },
      });
      setBrands(res.data.data);
      setPagination({ ...pagination, total: res.data.meta?.total || res.data.data.length });
    } catch (error) {
      toast.error('Failed to fetch brands');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, [pagination.page, search, filters]);

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await api.delete(`/brand/${deleteId}`);
      toast.success('Brand deleted successfully');
      fetchBrands();
    } catch (error) {
      toast.error('Failed to delete brand');
    } finally {
      setDeleteId(null);
    }
  };

  const columns = [
    {
      key: 'logo',
      header: 'Logo',
      render: (brand: any) => (
        brand.logo ? <img src={brand.logo} alt={brand.name} className="h-8 w-8 object-contain rounded-md border" /> : <div className="h-8 w-8 bg-gray-100 rounded-md border flex items-center justify-center text-xs text-gray-400">N/A</div>
      )
    },
    { key: 'name', header: 'Name', className: 'font-medium' },
    { 
      key: 'slug', 
      header: 'Slug',
      render: (brand: any) => (
        <span className="font-mono text-xs bg-gray-50 px-2 py-1 rounded text-gray-600">{brand.slug}</span>
      )
    },
    {
      key: 'status',
      header: 'Status',
      render: (brand: any) => (
        <Badge variant={brand.status !== false ? 'default' : 'secondary'}>
          {brand.status !== false ? 'Active' : 'Inactive'}
        </Badge>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (brand: any) => (
        <div className="flex gap-2">
          <PermissionGuard permission="brand:update">
            <Link to={`/brands/${brand.id}/edit`}>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Edit className="h-4 w-4" />
              </Button>
            </Link>
          </PermissionGuard>
          <PermissionGuard permission="brand:delete">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-red-500 hover:text-red-700"
              onClick={() => setDeleteId(brand.id)}
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
        title="Brands"
        description="Manage product brands"
        createButton={{
          label: 'New Brand',
          href: '/brands/create',
          permission: 'brand:create',
        }}
      />

      <SearchFilterBar
        searchPlaceholder="Search by name or slug..."
        onSearch={setSearch}
        filters={[
          {
            key: 'status',
            label: 'Status',
            options: [
              { value: 'true', label: 'Active' },
              { value: 'false', label: 'Inactive' },
            ],
          },
        ]}
        onFilterChange={(key, value) => setFilters({ ...filters, [key]: value === 'all' ? '' : value })}
        onClear={() => {
          setSearch('');
          setFilters({ status: '' });
        }}
      />

      <DataTable
        data={brands}
        columns={columns}
        loading={loading}
      />

      {pagination.total > pagination.limit && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing {brands.length} of {pagination.total} brands
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
              This action cannot be undone. This will permanently delete the brand.
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
