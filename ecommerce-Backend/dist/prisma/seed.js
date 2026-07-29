"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const client_1 = require("../generated/prisma/client");
const bcrypt = require("bcrypt");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
function getConnectionString() {
    const url = process.env.DATABASE_URL;
    if (!url)
        throw new Error('DATABASE_URL is not defined in environment variables');
    if (url.startsWith('prisma+postgres://')) {
        try {
            const parsed = new URL(url);
            const apiKey = parsed.searchParams.get('api_key');
            if (apiKey) {
                const decoded = Buffer.from(apiKey, 'base64').toString('utf-8');
                const json = JSON.parse(decoded);
                if (json.databaseUrl)
                    return json.databaseUrl;
            }
        }
        catch (e) {
            console.error('Failed to parse api_key from prisma+postgres URL:', e);
        }
    }
    return url;
}
const connectionString = getConnectionString();
const pool = new pg_1.Pool({ connectionString });
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_1.PrismaClient({ adapter });
async function main() {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const permissionsList = [
        { subject: 'dashboard', action: 'watch' },
        { subject: 'permission', action: 'watch' }, { subject: 'permission', action: 'create' }, { subject: 'permission', action: 'read' }, { subject: 'permission', action: 'update' }, { subject: 'permission', action: 'delete' },
        { subject: 'role', action: 'watch' }, { subject: 'role', action: 'create' }, { subject: 'role', action: 'read' }, { subject: 'role', action: 'update' }, { subject: 'role', action: 'delete' },
        { subject: 'user', action: 'watch' }, { subject: 'user', action: 'create' }, { subject: 'user', action: 'read' }, { subject: 'user', action: 'update' }, { subject: 'user', action: 'delete' },
        { subject: 'media', action: 'watch' }, { subject: 'media', action: 'read' }, { subject: 'media', action: 'upload' }, { subject: 'media', action: 'write' }, { subject: 'media', action: 'delete' },
        { subject: 'category', action: 'watch' }, { subject: 'category', action: 'create' }, { subject: 'category', action: 'read' }, { subject: 'category', action: 'update' }, { subject: 'category', action: 'delete' },
        { subject: 'brand', action: 'watch' }, { subject: 'brand', action: 'create' }, { subject: 'brand', action: 'read' }, { subject: 'brand', action: 'update' }, { subject: 'brand', action: 'delete' },
        { subject: 'attribute', action: 'watch' }, { subject: 'attribute', action: 'create' }, { subject: 'attribute', action: 'read' }, { subject: 'attribute', action: 'update' }, { subject: 'attribute', action: 'delete' },
        { subject: 'product', action: 'watch' }, { subject: 'product', action: 'create' }, { subject: 'product', action: 'read' }, { subject: 'product', action: 'update' }, { subject: 'product', action: 'delete' },
        { subject: 'all', action: 'manage' }
    ];
    try {
        await prisma.$executeRaw `SELECT setval('"Permission_id_seq"', (SELECT COALESCE(MAX(id), 0) + 1 FROM "Permission"), false);`;
    }
    catch (e) {
    }
    const createdPermissions = [];
    for (const p of permissionsList) {
        const perm = await prisma.permission.upsert({
            where: { action_subject: { action: p.action, subject: p.subject } },
            update: {},
            create: p,
        });
        createdPermissions.push(perm);
    }
    const superPerm = createdPermissions.find(p => p.subject === 'all' && p.action === 'manage');
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
        update: { roleId: adminRole.id },
        create: {
            email: 'admin@admin.com',
            password: hashedPassword,
            name: 'Admin User',
            roleId: adminRole.id,
        },
    });
    const catalogPermissions = createdPermissions.filter(p => ['category', 'brand', 'attribute', 'product'].includes(p.subject) &&
        ['watch', 'read'].includes(p.action));
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
        update: { roleId: catalogRole.id },
        create: {
            email: 'catalog@user.com',
            password: catalogPassword,
            name: 'Catalog User',
            roleId: catalogRole.id
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
//# sourceMappingURL=seed.js.map