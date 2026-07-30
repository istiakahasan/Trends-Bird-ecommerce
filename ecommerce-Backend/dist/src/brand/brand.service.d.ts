import { PrismaService } from '../prisma/prisma.service';
export declare class BrandService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        data: {
            name: string;
            slug: string;
            id: number;
            description: string | null;
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
            name: string;
            slug: string;
            id: number;
            description: string | null;
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
            name: string;
            slug: string;
            id: number;
            description: string | null;
            logo: string | null;
            status: boolean;
        };
    }>;
    update(id: number, body: any): Promise<{
        data: {
            name: string;
            slug: string;
            id: number;
            description: string | null;
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
