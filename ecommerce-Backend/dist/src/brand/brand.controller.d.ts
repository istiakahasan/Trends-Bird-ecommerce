import { BrandService } from './brand.service';
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    findAll(query: any): Promise<{
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
