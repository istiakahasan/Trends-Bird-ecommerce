import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

function getConnectionString(): string {
  const url = process.env.DATABASE_URL;

  if (!url) {
    throw new Error('DATABASE_URL is not defined in environment variables');
  }

  if (url.startsWith('prisma+postgres://')) {
    try {
      const parsed = new URL(url);
      const apiKey = parsed.searchParams.get('api_key');

      if (apiKey) {
        const decoded = Buffer.from(apiKey, 'base64').toString('utf-8');
        const json = JSON.parse(decoded);

        if (json.databaseUrl) {
          return json.databaseUrl;
        }
      }
    } catch (e) {
      console.error('Failed to parse api_key from prisma+postgres URL:', e);
    }
  }

  return url;
}


const connectionString = getConnectionString();

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter
});


async function main() {

  const hashedPassword = await bcrypt.hash(
    'admin123',
    10
  );


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


  const createdPermissions = [];


  for (const gp of groupedPermissions) {

    const permissionGroup =
      await prisma.permissionGroup.upsert({

        where:{
          name: gp.group
        },

        update:{},

        create:{
          name: gp.group,
          description:`Group for ${gp.group} module`
        }

      });


    for (const action of gp.actions) {

      const permissionName =
        `${gp.group}:${action}`;


      const permission =
        await prisma.permission.upsert({

          where:{
            name: permissionName
          },


          update:{
            groupId: permissionGroup.id
          },


          create:{
            name: permissionName,
            description:`Allows ${action} on ${gp.group}`,
            groupId: permissionGroup.id
          }

        });


      createdPermissions.push(permission);

    }

  }



  // ADMIN ROLE

  const adminRole =
    await prisma.role.upsert({

      where:{
        name:'Admin'
      },


      update:{
        permissions:{
          set:
          createdPermissions.map(
            p=>({id:p.id})
          )
        }
      },


      create:{
        name:'Admin',

        permissions:{
          connect:
          createdPermissions.map(
            p=>({id:p.id})
          )
        }
      }

    });



  // ADMIN USER
  await prisma.user.upsert({

    where:{
      email:'admin@admin.com'
    },


    update:{
      roleId:adminRole.id,
      active:true,

      // IMPORTANT FIX
      password:hashedPassword
    },


    create:{

      email:'admin@admin.com',

      password:hashedPassword,

      name:'Admin User',

      roleId:adminRole.id,

      active:true
    }

  });



  // CATALOG PERMISSIONS

  const catalogPermissions =
    createdPermissions.filter(p=>{

      const [subject, action] =
        p.name.split(':');


      return (
        [
          'category',
          'brand',
          'attribute',
          'product'
        ].includes(subject)
        &&
        [
          'watch',
          'read'
        ].includes(action)
      );

    });



  const catalogRole =
    await prisma.role.upsert({

      where:{
        name:'CatalogUser'
      },


      update:{
        permissions:{
          set:
          catalogPermissions.map(
            p=>({id:p.id})
          )
        }
      },


      create:{

        name:'CatalogUser',

        permissions:{
          connect:
          catalogPermissions.map(
            p=>({id:p.id})
          )
        }

      }

    });



  const catalogPassword =
    await bcrypt.hash(
      'catalog123',
      10
    );



  // CATALOG USER

  await prisma.user.upsert({

    where:{
      email:'catalog@user.com'
    },


    update:{

      roleId:catalogRole.id,

      active:true,

      // IMPORTANT FIX
      password:catalogPassword

    },


    create:{

      email:'catalog@user.com',

      password:catalogPassword,

      name:'Catalog User',

      roleId:catalogRole.id,

      active:true

    }

  });



  console.log('Database seeded successfully.');
  console.log(
    '- Admin User: admin@admin.com / admin123'
  );
  console.log(
    '- Catalog User: catalog@user.com / catalog123'
  );

}



main()

.then(async()=>{

  await prisma.$disconnect();

})

.catch(async(error)=>{

  console.error(error);

  await prisma.$disconnect();

  process.exit(1);

});