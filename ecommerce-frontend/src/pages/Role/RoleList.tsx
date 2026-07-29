import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/client';
import { PermissionGuard } from '../../components/PermissionGuard';

export const RoleList = () => {
  const [roles, setRoles] = useState([]);
  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState({ page: 1, limit: 10, total: 0 });

  const fetchRoles = async () => {
    try {
      const res = await api.get('/roles', {
        params: { page: pagination.page, limit: pagination.limit, search },
      });
      setRoles(res.data.data.items || []);
      setPagination(prev => ({ ...prev, total: res.data.data.total || 0 }));
    } catch (err) {
      console.error('Error fetching roles:', err);
    }
  };

  useEffect(() => {
    fetchRoles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.page, search]);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this role?')) return;
    try {
      await api.delete(`/roles/${id}`);
      fetchRoles();
    } catch (err) {
      alert('Failed to delete role');
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">Roles</h2>
        <PermissionGuard permission="role:create">
          <Link to="/roles/create" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            + New Role
          </Link>
        </PermissionGuard>
      </div>

      <div className="flex gap-4">
        <input
          placeholder="Search roles..."
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
              <th className="pb-3">Slug</th>
              <th className="pb-3">Description</th>
              <th className="pb-3 text-right pr-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-600 divide-y divide-gray-50">
            {roles.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-4 text-center text-gray-400">No roles found.</td>
              </tr>
            ) : (
              roles.map((r: any) => (
                <tr key={r.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 pl-2 font-semibold text-gray-800">{r.name}</td>
                  <td className="py-3 font-mono text-xs bg-gray-50 px-2 py-0.5 rounded text-gray-600 inline-block mt-2">{r.slug}</td>
                  <td className="py-3">{r.description}</td>
                  <td className="py-3 text-right pr-2 space-x-2">
                    <PermissionGuard permission="role:update">
                      <Link to={`/roles/${r.id}`} className="text-blue-600 hover:text-blue-800 font-semibold">Edit</Link>
                    </PermissionGuard>
                    <PermissionGuard permission="role:delete">
                      <button onClick={() => handleDelete(r.id)} className="text-red-600 hover:text-red-800 font-semibold">Delete</button>
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
