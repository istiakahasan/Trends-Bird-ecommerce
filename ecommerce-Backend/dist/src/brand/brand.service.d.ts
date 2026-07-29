import { PrismaService } from '../prisma/prisma.service';
export declare class BrandService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        data: {
            name: string;
            id: number;
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
            id: number;
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
            id: number;
        };
    }>;
    update(id: number, body: any): Promise<{
        data: {
            name: string;
            id: number;
        };
    }>;
    remove(id: number): Promise<{
        data: {
            success: boolean;
        };
    }>;
}
