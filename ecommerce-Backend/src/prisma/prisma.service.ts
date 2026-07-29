import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client';
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

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private static pool: Pool;

  constructor() {
    const connectionString = getConnectionString();
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    super({ adapter });
    PrismaService.pool = pool;
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
    if (PrismaService.pool) {
      await PrismaService.pool.end();
    }
  }
}
