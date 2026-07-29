import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

function getConnectionString(): string {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL is not defined in environment variables');
  if (url.startsWith('prisma+postgres://')) {
    try {
      const parsed = new URL(url);
      const apiKey = parsed.searchParams.get('api_key');
      if (apiKey) {
        const decoded = Buffer.from(apiKey, 'base64').toString('utf-8');
        const json = JSON.parse(decoded);
        if (json.databaseUrl) return json.databaseUrl;
      }
    } catch (e) {
      console.error('Failed to parse api_key from prisma+postgres URL:', e);
    }
  }
  return url;
}

const connectionString = getConnectionString();
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  // 1. Define groups and their permissions
  const groupedPermissions = [
    { group: 'dashboard', actions: ['watch'] },
    { group: 'permission', actions: ['watch', 'create', 'read', 'update', 'delete'] },
    { group: 'role', actions: ['watch', 'create', 'read', 'update', 'delete'] },
    { group: 'user', actions: ['watch', 'create', 'read', 'update', 'delete'] },
    { group: 'media', actions: ['watch', 'read', 'upload', 'write', 'delete'] },
    { group: 'category', actions: ['watch', 'create', 'read', 'update', 'delete'] },
    { group: 'brand', actions: ['watch', 'create', 'read', 'update', 'delete'] },
    { group: 'attribute', actions: ['watch', 'create', 'read', 'update', 'delete'] },
    { group: 'product', actions: ['watch', 'create', 'read', 'update', 'delete'] },
    { group: 'all', actions: ['manage'] }
  ];

  // Fix sequence desync from previous manual inserts
  try {
    await prisma.$executeRaw`SELECT setval('"Permission_id_seq"', (SELECT COALESCE(MAX(id), 0) + 1 FROM "Permission"), false);`;
    await prisma.$executeRaw`SELECT setval('"PermissionGroup_id_seq"', (SELECT COALESCE(MAX(id), 0) + 1 FROM "PermissionGroup"), false);`;
  } catch (e) {
    // Ignore if not postgres or table doesn't exist
  }

  // 2. Upsert all PermissionGroups and Permissions
  const createdPermissions = [];
  for (const gp of groupedPermissions) {
    const pg = await prisma.permissionGroup.upsert({
      where: { name: gp.group },
      update: {},
      create: { name: gp.group, description: `Group for ${gp.group} module` },
    });

    for (const action of gp.actions) {
      const permName = `${gp.group}:${action}`;
      const perm = await prisma.permission.upsert({
        where: { name: permName },
        update: { groupId: pg.id },
        create: { name: permName, description: `Allows ${action} on ${gp.group}`, groupId: pg.id },
      });
      createdPermissions.push(perm);
    }
  }

  // Find super permission
  const superPerm = createdPermissions.find(p => p.name === 'all:manage');

  // 3. Create admin role and user
  const adminRole = await prisma.role.upsert({
    where: { name: 'Admin' },
    update: {
      permissions: {
        set: createdPermissions.map(p => ({ id: p.id }))
      }
    },
    create: {
      name: 'Admin',
      permissions: {
        connect: createdPermissions.map(p => ({ id: p.id }))
      }
    },
  });
  
  await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: { roleId: adminRole.id, active: true },
    create: {
      email: 'admin@admin.com',
      password: hashedPassword,
      name: 'Admin User',
      roleId: adminRole.id,
      active: true
    },
  });

  // 4. Create Catalog user and role
  const catalogPermissions = createdPermissions.filter(p => {
    const [subj, act] = p.name.split(':');
    return ['category', 'brand', 'attribute', 'product'].includes(subj) && 
           ['watch', 'read'].includes(act);
  });

  const catalogRole = await prisma.role.upsert({
    where: { name: 'CatalogUser' },
    update: {},
    create: {
      name: 'CatalogUser',
      permissions: {
        connect: catalogPermissions.map(p => ({ id: p.id }))
      }
    }
  });

  const catalogPassword = await bcrypt.hash('catalog123', 10);
  await prisma.user.upsert({
    where: { email: 'catalog@user.com' },
    update: { roleId: catalogRole.id, active: true },
    create: {
      email: 'catalog@user.com',
      password: catalogPassword,
      name: 'Catalog User',
      roleId: catalogRole.id,
      active: true
    }
  });
  
  console.log(`Database seeded successfully.`);
  console.log(`- ${createdPermissions.length} permissions verified.`);
  console.log(`- Admin User seeded (admin@admin.com / admin123)`);
  console.log(`- Catalog User seeded (catalog@user.com / catalog123)`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
