import { PrismaService } from '../prisma/prisma.service';
export declare class BrandService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        data: {
            id: number;
            name: string;
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
        };
    }>;
    update(id: number, body: any): Promise<{
        data: {
            id: number;
            name: string;
        };
    }>;
    remove(id: number): Promise<{
        data: {
            success: boolean;
        };
    }>;
}
