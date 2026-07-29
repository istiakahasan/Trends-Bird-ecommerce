import { PrismaService } from '../prisma/prisma.service';
export declare class AttributeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        data: {
            values: {
                id: number;
                slug: string;
                value: string;
                reference: string | null;
                attributeId: number;
            }[];
        } & {
            id: number;
            name: string;
            type: string;
            slug: string;
        };
    }>;
    findAll(query: {
        search?: string;
        type?: string;
        page?: string;
        limit?: string;
    }): Promise<{
        data: ({
            values: {
                id: number;
                slug: string;
                value: string;
                reference: string | null;
                attributeId: number;
            }[];
        } & {
            id: number;
            name: string;
            type: string;
            slug: string;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(id: number): Promise<{
        data: {
            values: {
                id: number;
                slug: string;
                value: string;
                reference: string | null;
                attributeId: number;
            }[];
        } & {
            id: number;
            name: string;
            type: string;
            slug: string;
        };
    }>;
    update(id: number, body: any): Promise<{
        data: {
            values: {
                id: number;
                slug: string;
                value: string;
                reference: string | null;
                attributeId: number;
            }[];
        } & {
            id: number;
            name: string;
            type: string;
            slug: string;
        };
    }>;
    remove(id: number): Promise<{
        data: {
            success: boolean;
        };
    }>;
}
