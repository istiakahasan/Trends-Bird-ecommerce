"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.ProductVariantScalarFieldEnum = exports.ProductScalarFieldEnum = exports.AttributeValueScalarFieldEnum = exports.AttributeScalarFieldEnum = exports.BrandScalarFieldEnum = exports.CategoryScalarFieldEnum = exports.MediaScalarFieldEnum = exports.UserScalarFieldEnum = exports.RoleScalarFieldEnum = exports.PermissionScalarFieldEnum = exports.PermissionGroupScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = require("@prisma/client/runtime/index-browser");
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    PermissionGroup: 'PermissionGroup',
    Permission: 'Permission',
    Role: 'Role',
    User: 'User',
    Media: 'Media',
    Category: 'Category',
    Brand: 'Brand',
    Attribute: 'Attribute',
    AttributeValue: 'AttributeValue',
    Product: 'Product',
    ProductVariant: 'ProductVariant'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.PermissionGroupScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description'
};
exports.PermissionScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    groupId: 'groupId'
};
exports.RoleScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    phone: 'phone',
    gender: 'gender',
    avatar: 'avatar',
    active: 'active',
    refreshToken: 'refreshToken',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.MediaScalarFieldEnum = {
    id: 'id',
    fileName: 'fileName',
    storedName: 'storedName',
    path: 'path',
    url: 'url',
    thumbnailUrl: 'thumbnailUrl',
    mimeType: 'mimeType',
    type: 'type',
    size: 'size',
    width: 'width',
    height: 'height',
    altText: 'altText',
    title: 'title',
    uploadedById: 'uploadedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CategoryScalarFieldEnum = {
    id: 'id',
    name: 'name',
    parentId: 'parentId'
};
exports.BrandScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    logo: 'logo',
    status: 'status'
};
exports.AttributeScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    type: 'type'
};
exports.AttributeValueScalarFieldEnum = {
    id: 'id',
    value: 'value',
    slug: 'slug',
    reference: 'reference',
    attributeId: 'attributeId'
};
exports.ProductScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    brandId: 'brandId',
    categoryId: 'categoryId'
};
exports.ProductVariantScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    sku: 'sku',
    price: 'price',
    stock: 'stock'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map