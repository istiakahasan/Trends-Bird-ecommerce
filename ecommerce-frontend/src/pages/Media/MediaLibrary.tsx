import React, { useEffect, useState } from 'react';
import api from '../../api/client';

export const MediaLibrary = () => {
  const [media, setMedia] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const fetchMedia = async () => {
    try {
      const res = await api.get('/media');
      setMedia(res.data.data.items || res.data.data || []);
    } catch (err) {
      console.error('Failed to load media');
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', files[0]);

    try {
      await api.post('/media/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      fetchMedia();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Upload failed. File might be too large or unsupported.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this file?')) return;
    try {
      await api.delete(`/media/${id}`);
      fetchMedia();
    } catch (err) {
      alert('Failed to delete media');
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-gray-50">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Media Library</h2>
          <p className="text-sm text-gray-500">Upload and manage media files for products, brands, or pages.</p>
        </div>
        <label className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer shadow-sm">
          {uploading ? 'Uploading...' : '+ Upload File'}
          <input type="file" onChange={handleFileUpload} disabled={uploading} className="hidden" />
        </label>
      </div>

      {error && <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm border border-red-100">{error}</div>}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {media.length === 0 ? (
          <div className="col-span-full py-12 text-center text-gray-400 flex flex-col items-center justify-center space-y-2">
            <span className="text-4xl">📂</span>
            <p>No media files uploaded yet.</p>
          </div>
        ) : (
          media.map((m: any) => (
            <div key={m.id} className="relative group bg-gray-50 rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square flex items-center justify-center bg-gray-100 overflow-hidden">
                {m.mimeType?.startsWith('image/') ? (
                  <img src={m.url} alt={m.name} className="object-cover w-full h-full" />
                ) : (
                  <span className="text-3xl text-gray-400">📄</span>
                )}
              </div>
              <div className="p-2 space-y-1">
                <p className="text-xs font-semibold text-gray-700 truncate">{m.name}</p>
                <p className="text-[10px] text-gray-400 truncate">{(m.size / 1024).toFixed(1)} KB</p>
              </div>
              <button
                onClick={() => handleDelete(m.id)}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
                title="Delete file"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
