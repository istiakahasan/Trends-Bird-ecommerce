import { AttributeService } from './attribute.service';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { CreateAttributeValueDto } from './dto/create-attribute-value.dto';
import { UpdateAttributeValueDto } from './dto/update-attribute-value.dto';
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
    create(dto: CreateAttributeDto): Promise<{
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
    update(id: number, dto: UpdateAttributeDto): Promise<{
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
    findValue(valueId: number): Promise<{
        data: {
            attribute: {
                id: number;
                name: string;
                type: string;
                slug: string;
            };
        } & {
            id: number;
            slug: string;
            value: string;
            reference: string | null;
            attributeId: number;
        };
    }>;
    addValue(id: number, dto: CreateAttributeValueDto): Promise<{
        data: {
            id: number;
            slug: string;
            value: string;
            reference: string | null;
            attributeId: number;
        };
    }>;
    updateValue(valueId: number, dto: UpdateAttributeValueDto): Promise<{
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
