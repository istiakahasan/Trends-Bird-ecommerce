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
            slug: string;
            type: string;
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
            slug: string;
            type: string;
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
            slug: string;
            type: string;
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
            slug: string;
            type: string;
        };
    }>;
    remove(id: number): Promise<{
        data: {
            success: boolean;
        };
    }>;
    addValue(id: number, body: any): Promise<{
        data: {
            id: number;
            slug: string;
            value: string;
            reference: string | null;
            attributeId: number;
        };
    }>;
    updateValue(valueId: number, body: any): Promise<{
        data: {
            id: number;
            slug: string;
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
