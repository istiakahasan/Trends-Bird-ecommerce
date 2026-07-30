import { PrismaService } from '../prisma/prisma.service';
export declare class BrandService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        data: {
            id: number;
            name: string;
            description: string | null;
            slug: string;
            logo: string | null;
            status: boolean;
        };
    }>;
    findAll(query: {
        search?: string;
        status?: string;
        page?: string;
        limit?: string;
    }): Promise<{
        data: {
            id: number;
            name: string;
            description: string | null;
            slug: string;
            logo: string | null;
            status: boolean;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(id: number): Promise<{
        data: {
            id: number;
            name: string;
            description: string | null;
            slug: string;
            logo: string | null;
            status: boolean;
        };
    }>;
    update(id: number, body: any): Promise<{
        data: {
            id: number;
            name: string;
            description: string | null;
            slug: string;
            logo: string | null;
            status: boolean;
        };
    }>;
    remove(id: number): Promise<{
        data: {
            success: boolean;
        };
    }>;
}
