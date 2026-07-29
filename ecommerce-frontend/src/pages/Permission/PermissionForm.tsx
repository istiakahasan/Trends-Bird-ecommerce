import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import api from '../../api/client';

export const PermissionForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEdit) {
      const fetchPermission = async () => {
        try {
          const res = await api.get(`/permissions/${id}`);
          const { name, slug, description } = res.data.data;
          setName(name);
          setSlug(slug);
          setDescription(description || '');
        } catch (err) {
          setError('Failed to fetch permission details');
        }
      };
      fetchPermission();
    }
  }, [id, isEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (isEdit) {
        await api.put(`/permissions/${id}`, { name, slug, description });
      } else {
        await api.post('/permissions', { name, slug, description });
      }
      navigate('/permissions');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save permission');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-gray-50">
        <h2 className="text-xl font-bold text-gray-900">{isEdit ? 'Edit Permission' : 'Create Permission'}</h2>
        <Link to="/permissions" className="text-sm font-semibold text-gray-500 hover:text-gray-700">Cancel</Link>
      </div>

      {error && <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm border border-red-100">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="block text-sm font-semibold text-gray-700">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Create Products"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-semibold text-gray-700">Slug</label>
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. product:create"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-semibold text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe what this permission allows..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 rounded-lg text-sm transition-colors shadow-sm"
        >
          {loading ? 'Saving...' : 'Save Permission'}
        </button>
      </form>
    </div>
  );
};
