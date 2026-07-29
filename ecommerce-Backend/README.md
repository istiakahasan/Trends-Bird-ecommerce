# E-Commerce Backend

This is the backend API for the E-Commerce platform, built with NestJS, Prisma, and PostgreSQL.

## Default Credentials

When you run `npx ts-node prisma/seed.ts`, the database is populated with the following credentials for testing out the RBAC (Role-Based Access Control) system:

### 1. Super Administrator (Full Access)
This user holds the `manage:all` permission and can access every route in the system.
- **Email**: `admin@admin.com`
- **Password**: `admin123`

### 2. Catalog User (Limited Access)
This user is deliberately limited to `watch` and `read` access for Products, Categories, Brands, and Attributes only. They cannot create, update, or delete anything, nor can they view roles, users, or permissions. 
This account is provided to test the `403 Forbidden` behavior in Postman.
- **Email**: `catalog@user.com`
- **Password**: `catalog123`
