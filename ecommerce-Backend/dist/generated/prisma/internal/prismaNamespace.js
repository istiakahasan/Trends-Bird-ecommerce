"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.ProductVariantScalarFieldEnum = exports.ProductScalarFieldEnum = exports.AttributeValueScalarFieldEnum = exports.AttributeScalarFieldEnum = exports.BrandScalarFieldEnum = exports.CategoryScalarFieldEnum = exports.MediaScalarFieldEnum = exports.UserScalarFieldEnum = exports.RoleScalarFieldEnum = exports.PermissionScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = require("@prisma/client/runtime/client");
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.9.0",
    engine: "e922089b7d7502aff4249d5da3420f6fa55fc6ad"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
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
exports.PermissionScalarFieldEnum = {
    id: 'id',
    action: 'action',
    subject: 'subject'
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
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.MediaScalarFieldEnum = {
    id: 'id',
    url: 'url',
    type: 'type',
    createdAt: 'createdAt'
};
exports.CategoryScalarFieldEnum = {
    id: 'id',
    name: 'name',
    parentId: 'parentId'
};
exports.BrandScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.AttributeScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.AttributeValueScalarFieldEnum = {
    id: 'id',
    value: 'value',
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
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map