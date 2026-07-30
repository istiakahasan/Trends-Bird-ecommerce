# 🛍️ Trends Bird E-Commerce

A full-stack e-commerce platform designed with a scalable architecture, secure authentication, and modular backend services. The project provides RESTful APIs for managing products, categories, brands, attributes, inventory, orders, and user authentication, along with a responsive frontend for customers and administrators.

---

## 📚 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Seeded Account Credentials](#seeded-account-credentials)
- [Authentication Strategy](#authentication-strategy)
- [Design Decisions](#design-decisions)
- [Module Status](#module-status)
- [Known Issues](#known-issues)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

# 📖 Overview

This project is a modern e-commerce application built using a Node.js backend with Prisma ORM and PostgreSQL, alongside a React frontend. The application follows a modular architecture that makes it easy to maintain and extend.

### Features

- 🔐 User Authentication & Authorization
- 👥 Role-Based Access Control
- 📦 Product Management
- 🏷 Category Management
- 🏢 Brand Management
- 🎨 Product Attributes & Variants
- 📊 Inventory Management
- 🛒 Order Management
- 🗄 PostgreSQL Database
- ⚡ RESTful API
- 🌱 Database Seeding
- 📱 Responsive Frontend

---

# 🛠 Tech Stack

## Frontend

- React.js
- TypeScript
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Bcrypt

## Tools

- Git
- GitHub
- Prisma Studio
- Postman

---

# 📂 Project Structure

```
Trends-Bird-ecommerce
│
├── ecommerce-frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── ecommerce-Backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   ├── migrations/
│   │   └── seed.ts
│   │
│   ├── src/
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/istiakahasan/Trends-Bird-ecommerce.git

cd Trends-Bird-ecommerce
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **ecommerce-Backend** directory.

```env
DATABASE_URL=

JWT_ACCESS_SECRET=

JWT_REFRESH_SECRET=

ACCESS_TOKEN_EXPIRES_IN=15m

REFRESH_TOKEN_EXPIRES_IN=30d

PORT=5000
```

> Update the values according to your local development environment.

---

# 📦 Installation

## Backend

```bash
cd ecommerce-Backend

npm install
```

## Frontend

```bash
cd ecommerce-frontend

npm install
```

---

# 🗄 Database Setup

## Generate Prisma Client

```bash
npx prisma generate
```

## Run Database Migration

```bash
npx prisma migrate dev
```

## Seed the Database

```bash
npx prisma db seed
```

---

# ▶️ Running the Application

## Start Backend

```bash
cd ecommerce-Backend

npm run start:dev
```

Backend runs at:

```
http://localhost:5000
```

---

## Start Frontend

```bash
cd ecommerce-frontend

npm start
```

Frontend runs at:

```
http://localhost:5173
```

---

# 👤 Seeded Account Credentials

> Update these credentials if your `seed.ts` uses different values.


| Role | Email | Password |
|------|-------|----------|
| Admin | admin@admin.com | admin123 |
| Catalog User | catalog@user.com | catalog123 |

---

# 🔐 Authentication Strategy

The application uses **JWT (JSON Web Token)** authentication.

### Access Token

- Short-lived JWT
- Sent in the `Authorization` header

```
Authorization: Bearer <access_token>
```

### Refresh Token

- Long-lived JWT
- Stored as a secure HttpOnly cookie
- Used to issue a new access token without requiring users to log in again

---

# 🏗 Design Decisions

- Modular project architecture
- RESTful API design
- Prisma ORM for type-safe database access
- PostgreSQL relational database
- JWT-based authentication
- Password hashing using bcrypt
- Separate CRUD operations for attribute values
- Composite unique constraints for attribute values
- Validation before deleting entities referenced by product variants
- Layered service architecture for maintainability and scalability

---

# 📋 Module Status

| Module | Status |
|----------|----------|
| Authentication | ✅ Complete |
| Authorization | ✅ Complete |
| User Management | ✅ Complete |
| Product Management | ✅ Complete |
| Category Management | ✅ Complete |
| Brand Management | ✅ Complete |
| Attribute Management | ✅ Complete |
| Product Variants | ✅ Complete |
| Inventory Management | ✅ Complete |
| Orders | 🟡 Partial |

| Admin Dashboard | 🟡 Partial |

---


# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/your-feature
```

3. Commit your changes.

```bash
git commit -m "feat: add new feature"
```

4. Push your branch.

```bash
git push origin feature/your-feature
```

5. Open a Pull Request.

---

# 👨‍💻 Author

**Istiak Ahsan**

- GitHub: https://github.com/istiakahasan

---

