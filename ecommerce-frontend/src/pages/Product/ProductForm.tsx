import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import api from '../../api/client';

export const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [brandId, setBrandId] = useState('');
  const [categoryIds, setCategoryIds] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [brandsRes, categoriesRes] = await Promise.all([
          api.get('/brands', { params: { limit: 100 } }),
          api.get('/categories', { params: { limit: 100 } }),
        ]);
        setBrands(brandsRes.data.data.items || []);
        setCategories(categoriesRes.data.data.items || []);
      } catch (err) {
        console.error('Failed to load form meta-data');
      }
    };
    fetchData();

    if (isEdit) {
      const fetchProduct = async () => {
        try {
          const res = await api.get(`/products/${id}`);
          const { name, sku, price, stock, brand, categories, description } = res.data.data;
          setName(name);
          setSku(sku || '');
          setPrice(price);
          setStock(stock);
          setBrandId(brand?.id || brand || '');
          setCategoryIds(categories ? categories.map((c: any) => c.id || c) : []);
          setDescription(description || '');
        } catch (err) {
          setError('Failed to fetch product details');
        }
      };
      fetchProduct();
    }
  }, [id, isEdit]);

  const handleCategoryToggle = (catId: string) => {
    setCategoryIds(prev =>
      prev.includes(catId) ? prev.filter(id => id !== catId) : [...prev, catId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const payload = {
        name,
        sku,
        price: Number(price),
        stock: Number(stock),
        brandId: brandId || null,
        categoryIds,
        description,
      };
      if (isEdit) {
        await api.put(`/products/${id}`, payload);
      } else {
        await api.post('/products', payload);
      }
      navigate('/products');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-gray-50">
        <h2 className="text-xl font-bold text-gray-900">{isEdit ? 'Edit Product' : 'Create Product'}</h2>
        <Link to="/products" className="text-sm font-semibold text-gray-500 hover:text-gray-700">Cancel</Link>
      </div>

      {error && <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm border border-red-100">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1 col-span-2">
            <label className="block text-sm font-semibold text-gray-700">Product Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Air Max Running Shoes"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700">SKU / Model Number</label>
            <input
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. NIKE-AM-001"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700">Brand</label>
            <select
              value={brandId}
              onChange={(e) => setBrandId(e.target.value)}
              className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">Select Brand</option>
              {brands.map((b: any) => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700">Price ($)</label>
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700">Stock Quantity</label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
              className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-semibold text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full border border-gray-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the product specifications, materials, and size guide..."
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700">Categories</label>
          <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 max-h-40 overflow-y-auto flex flex-wrap gap-3">
            {categories.length === 0 ? (
              <p className="text-sm text-gray-400 w-full text-center">No categories found.</p>
            ) : (
              categories.map((c: any) => (
                <label key={c.id} className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 cursor-pointer text-sm shadow-sm select-none hover:border-blue-300">
                  <input
                    type="checkbox"
                    checked={categoryIds.includes(c.id)}
                    onChange={() => handleCategoryToggle(c.id)}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-semibold">{c.name}</span>
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
          {loading ? 'Saving...' : 'Save Product'}
        </button>
      </form>
    </div>
  );
};
