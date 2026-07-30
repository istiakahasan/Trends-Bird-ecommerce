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
    create(dto: CreateAttributeDto): Promise<{
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
    update(id: number, dto: UpdateAttributeDto): Promise<{
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
    findValue(valueId: number): Promise<{
        data: {
            attribute: {
                name: string;
                slug: string;
                type: string;
                id: number;
            };
        } & {
            slug: string;
            id: number;
            value: string;
            reference: string | null;
            attributeId: number;
        };
    }>;
    addValue(id: number, dto: CreateAttributeValueDto): Promise<{
        data: {
            slug: string;
            id: number;
            value: string;
            reference: string | null;
            attributeId: number;
        };
    }>;
    updateValue(valueId: number, dto: UpdateAttributeValueDto): Promise<{
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
