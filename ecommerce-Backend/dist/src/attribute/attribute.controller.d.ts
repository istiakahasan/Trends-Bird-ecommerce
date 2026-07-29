import { AttributeService } from './attribute.service';
export declare class AttributeController {
    private readonly attributeService;
    constructor(attributeService: AttributeService);
    findAll(query: any): Promise<{
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
