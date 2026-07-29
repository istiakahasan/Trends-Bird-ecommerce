import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import api from '../../api/client';

export const RoleForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
  const [allPermissions, setAllPermissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAllPermissions = async () => {
      try {
        const res = await api.get('/permissions', { params: { limit: 100 } });
        setAllPermissions(res.data.data.items || []);
      } catch (err) {
        console.error('Failed to load permissions');
      }
    };

    fetchAllPermissions();

    if (isEdit) {
      const fetchRole = async () => {
        try {
          const res = await api.get(`/roles/${id}`);
          const { name, slug, description, permissions } = res.data.data;
          setName(name);
          setSlug(slug);
          setDescription(description || '');
          setSelectedPermissions(permissions ? permissions.map((p: any) => p.id || p) : []);
        } catch (err) {
          setError('Failed to fetch role details');
        }
      };
      fetchRole();
    }
  }, [id, isEdit]);

  const handlePermissionToggle = (permId: string) => {
    setSelectedPermissions(prev =>
      prev.includes(permId) ? prev.filter(id => id !== permId) : [...prev, permId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const payload = { name, slug, description, permissions: selectedPermissions };
      if (isEdit) {
        await api.put(`/roles/${id}`, payload);
      } else {
        await api.post('/roles', payload);
      }
      navigate('/roles');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save role');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-gray-50">
        <h2 className="text-xl font-bold text-gray-900">{isEdit ? 'Edit Role' : 'Create Role'}</h2>
        <Link to="/roles" className="text-sm font-semibold text-gray-500 hover:text-gray-700">Cancel</Link>
      </div>

      {error && <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm border border-red-100">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Administrator"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700">Slug</label>
            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. admin"
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-semibold text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe what roles of this type represent..."
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700">Permissions Mapping</label>
          <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 max-h-60 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-3">
            {allPermissions.length === 0 ? (
              <p className="text-sm text-gray-400 col-span-2 text-center py-4">No permissions found. Set up permissions first.</p>
            ) : (
              allPermissions.map((p: any) => (
                <label key={p.id} className="flex items-start space-x-3 p-2 bg-white rounded-lg border border-gray-100 hover:border-blue-300 cursor-pointer shadow-sm">
                  <input
                    type="checkbox"
                    checked={selectedPermissions.includes(p.id)}
                    onChange={() => handlePermissionToggle(p.id)}
                    className="mt-1 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{p.name}</p>
                    <p className="text-xs text-gray-400 font-mono">{p.slug}</p>
                  </div>
                </label>
              ))
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 rounded-lg text-sm transition-colors shadow-sm"
        >
          {loading ? 'Saving...' : 'Save Role'}
        </button>
      </form>
    </div>
  );
};
