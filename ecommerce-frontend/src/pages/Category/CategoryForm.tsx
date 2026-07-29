import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import api from '../../api/client';

export const CategoryForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [parentId, setParentId] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get('/categories', { params: { limit: 100 } });
        setCategories(res.data.data.items || []);
      } catch (err) {
        console.error('Failed to load categories');
      }
    };
    fetchCategories();

    if (isEdit) {
      const fetchCategory = async () => {
        try {
          const res = await api.get(`/categories/${id}`);
          const { name, slug, description, parent } = res.data.data;
          setName(name);
          setSlug(slug);
          setDescription(description || '');
          setParentId(parent?.id || parent || '');
        } catch (err) {
          setError('Failed to fetch category details');
        }
      };
      fetchCategory();
    }
  }, [id, isEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const payload = { name, slug, description, parentId: parentId || null };
      if (isEdit) {
        await api.put(`/categories/${id}`, payload);
      } else {
        await api.post('/categories', payload);
      }
      navigate('/categories');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save category');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-gray-50">
        <h2 className="text-xl font-bold text-gray-900">{isEdit ? 'Edit Category' : 'Create Category'}</h2>
        <Link to="/categories" className="text-sm font-semibold text-gray-500 hover:text-gray-700">Cancel</Link>
      </div>

      {error && <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm border border-red-100">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="block text-sm font-semibold text-gray-700">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Electronics"
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
              placeholder="e.g. electronics"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700">Parent Category</label>
            <select
              value={parentId}
              onChange={(e) => setParentId(e.target.value)}
              className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">No Parent (Root)</option>
              {categories
                .filter((cat: any) => cat.id !== id) // Prevent cyclic nesting
                .map((cat: any) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
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
            placeholder="Describe what categories of products belong here..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 rounded-lg text-sm transition-colors shadow-sm"
        >
          {loading ? 'Saving...' : 'Save Category'}
        </button>
      </form>
    </div>
  );
};
