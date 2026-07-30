import { BrandService } from './brand.service';
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    findAll(query: any): Promise<{
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
