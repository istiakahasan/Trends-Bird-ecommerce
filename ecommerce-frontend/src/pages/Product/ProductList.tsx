import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/client';
import { PermissionGuard } from '../../components/PermissionGuard';

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState({ page: 1, limit: 10, total: 0 });

  const fetchProducts = async () => {
    try {
      const res = await api.get('/products', {
        params: { page: pagination.page, limit: pagination.limit, search },
      });
      setProducts(res.data.data.items || []);
      setPagination(prev => ({ ...prev, total: res.data.data.total || 0 }));
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.page, search]);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      await api.delete(`/products/${id}`);
      fetchProducts();
    } catch (err) {
      alert('Failed to delete product');
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">Products</h2>
        <PermissionGuard permission="product:create">
          <Link to="/products/create" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            + New Product
          </Link>
        </PermissionGuard>
      </div>

      <div className="flex gap-4">
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-gray-500 text-sm font-semibold">
              <th className="pb-3 pl-2">Name</th>
              <th className="pb-3">SKU</th>
              <th className="pb-3">Price</th>
              <th className="pb-3">Stock</th>
              <th className="pb-3">Brand</th>
              <th className="pb-3 text-right pr-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-600 divide-y divide-gray-50">
            {products.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-4 text-center text-gray-400">No products found.</td>
              </tr>
            ) : (
              products.map((p: any) => (
                <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 pl-2 font-semibold text-gray-800">{p.name}</td>
                  <td className="py-3 font-mono text-xs">{p.sku || '—'}</td>
                  <td className="py-3 font-medium text-gray-900">${Number(p.price).toFixed(2)}</td>
                  <td className="py-3">{p.stock}</td>
                  <td className="py-3">{p.brand?.name || '—'}</td>
                  <td className="py-3 text-right pr-2 space-x-2">
                    <PermissionGuard permission="product:update">
                      <Link to={`/products/${p.id}`} className="text-blue-600 hover:text-blue-800 font-semibold">Edit</Link>
                    </PermissionGuard>
                    <PermissionGuard permission="product:delete">
                      <button onClick={() => handleDelete(p.id)} className="text-red-600 hover:text-red-800 font-semibold">Delete</button>
                    </PermissionGuard>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {pagination.total > pagination.limit && (
        <div className="flex justify-between items-center pt-4 border-t border-gray-50 text-sm">
          <button
            disabled={pagination.page === 1}
            onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
            className="border border-gray-200 px-3 py-1.5 rounded-lg disabled:opacity-50 hover:bg-gray-50 font-medium"
          >
            Previous
          </button>
          <span className="text-gray-500 font-medium">Page {pagination.page} of {Math.ceil(pagination.total / pagination.limit)}</span>
          <button
            disabled={pagination.page * pagination.limit >= pagination.total}
            onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
            className="border border-gray-200 px-3 py-1.5 rounded-lg disabled:opacity-50 hover:bg-gray-50 font-medium"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
