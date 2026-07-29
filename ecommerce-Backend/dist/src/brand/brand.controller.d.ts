import { BrandService } from './brand.service';
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    findAll(query: any): Promise<{
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
    create(body: any): Promise<{
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
