import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import api from '../../api/client';

export const AttributeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [type, setType] = useState('text');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEdit) {
      const fetchAttribute = async () => {
        try {
          const res = await api.get(`/attributes/${id}`);
          const { name, slug, type, description } = res.data.data;
          setName(name);
          setSlug(slug);
          setType(type);
          setDescription(description || '');
        } catch (err) {
          setError('Failed to fetch attribute details');
        }
      };
      fetchAttribute();
    }
  }, [id, isEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const payload = { name, slug, type, description };
      if (isEdit) {
        await api.put(`/attributes/${id}`, payload);
      } else {
        await api.post('/attributes', payload);
      }
      navigate('/attributes');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save attribute');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-gray-50">
        <h2 className="text-xl font-bold text-gray-900">{isEdit ? 'Edit Attribute' : 'Create Attribute'}</h2>
        <Link to="/attributes" className="text-sm font-semibold text-gray-500 hover:text-gray-700">Cancel</Link>
      </div>

      {error && <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm border border-red-100">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="block text-sm font-semibold text-gray-700">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Size"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700">Slug</label>
            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. size"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              required
            >
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="select">Select / Dropdown</option>
              <option value="checkbox">Checkbox</option>
            </select>
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-semibold text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the attribute (e.g. Used for apparel product sizes)..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 rounded-lg text-sm transition-colors shadow-sm"
        >
          {loading ? 'Saving...' : 'Save Attribute'}
        </button>
      </form>
    </div>
  );
};
