import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { PermissionList } from './pages/Permission/PermissionList';
import { PermissionForm } from './pages/Permission/PermissionForm';
import { RoleList } from './pages/Role/RoleList';
import { RoleForm } from './pages/Role/RoleForm';
import { UserList } from './pages/User/UserList';
import { UserForm } from './pages/User/UserForm';
import { MediaLibrary } from './pages/Media/MediaLibrary';
import { CategoryList } from './pages/Category/CategoryList';
import { CategoryForm } from './pages/Category/CategoryForm';
import { BrandList } from './pages/Brand/BrandList';
import { BrandForm } from './pages/Brand/BrandForm';
import { AttributeList } from './pages/Attribute/AttributeList';
import { AttributeForm } from './pages/Attribute/AttributeForm';
import { ProductList } from './pages/Product/ProductList';
import { ProductForm } from './pages/Product/ProductForm';
import { Toaster } from 'sonner';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            
            <Route path="permissions" element={<PermissionList />} />
            <Route path="permissions/create" element={<PermissionForm />} />
            <Route path="permissions/:id" element={<PermissionForm />} />
            
            <Route path="roles" element={<RoleList />} />
            <Route path="roles/create" element={<RoleForm />} />
            <Route path="roles/:id" element={<RoleForm />} />
            
            <Route path="users" element={<UserList />} />
            <Route path="users/create" element={<UserForm />} />
            <Route path="users/:id" element={<UserForm />} />
            
            <Route path="media" element={<MediaLibrary />} />
            
            <Route path="categories" element={<CategoryList />} />
            <Route path="categories/create" element={<CategoryForm />} />
            <Route path="categories/:id" element={<CategoryForm />} />
            
            <Route path="brands" element={<BrandList />} />
            <Route path="brands/create" element={<BrandForm />} />
            <Route path="brands/:id" element={<BrandForm />} />
            
            <Route path="attributes" element={<AttributeList />} />
            <Route path="attributes/create" element={<AttributeForm />} />
            <Route path="attributes/:id" element={<AttributeForm />} />
            
            <Route path="products" element={<ProductList />} />
            <Route path="products/create" element={<ProductForm />} />
            <Route path="products/:id" element={<ProductForm />} />
          </Route>
        </Routes>
      </AuthProvider>
      <Toaster position="top-right" richColors />
    </BrowserRouter>
  );

}

export default App;