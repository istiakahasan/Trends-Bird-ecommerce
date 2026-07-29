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

---

## Architecture Choices (Section 5.4)

### 1. Role Changes & Token Staleness
Because the system employs a stateless JWT architecture where permissions and roles are embedded directly into the token payload for rapid verification, **Role and Permission changes take effect on the NEXT REFRESH**. 
When an admin updates a user's role, the user's current short-lived access token remains valid until it expires (up to 15 minutes), at which point their frontend will automatically hit `/auth/refresh` and be issued a new token containing their updated permissions. (Note: *Account deactivations* take effect immediately on the next refresh as well).

### 2. User Deletions
User deletion is implemented as a **HARD DELETE**. Calling `DELETE /api/user/:id` will permanently drop the record from the database.
