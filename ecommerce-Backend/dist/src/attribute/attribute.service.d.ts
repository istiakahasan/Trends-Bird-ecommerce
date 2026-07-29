import { PrismaService } from '../prisma/prisma.service';
export declare class AttributeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        data: {
            values: {
                slug: string;
                id: number;
                value: string;
                reference: string | null;
                attributeId: number;
            }[];
        } & {
            name: string;
            slug: string;
            type: string;
            id: number;
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
                slug: string;
                id: number;
                value: string;
                reference: string | null;
                attributeId: number;
            }[];
        } & {
            name: string;
            slug: string;
            type: string;
            id: number;
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
                slug: string;
                id: number;
                value: string;
                reference: string | null;
                attributeId: number;
            }[];
        } & {
            name: string;
            slug: string;
            type: string;
            id: number;
        };
    }>;
    update(id: number, body: any): Promise<{
        data: {
            values: {
                slug: string;
                id: number;
                value: string;
                reference: string | null;
                attributeId: number;
            }[];
        } & {
            name: string;
            slug: string;
            type: string;
            id: number;
        };
    }>;
    remove(id: number): Promise<{
        data: {
            success: boolean;
        };
    }>;
    addValue(attributeId: number, body: any): Promise<{
        data: {
            slug: string;
            id: number;
            value: string;
            reference: string | null;
            attributeId: number;
        };
    }>;
    updateValue(valueId: number, body: any): Promise<{
        data: {
            slug: string;
            id: number;
            value: string;
            reference: string | null;
            attributeId: number;
        };
    }>;
    removeValue(valueId: number): Promise<{
        data: {
            success: boolean;
        };
    }>;
}
