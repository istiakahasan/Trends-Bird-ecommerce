import { MediaService } from './media.service';
import { UpdateMediaDto } from './dto/update-media.dto';
import { MediaQueryDto } from './dto/media-query.dto';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    uploadFile(file: Express.Multer.File, req: any): Promise<{
        data: ({
            uploadedBy: {
                id: number;
                name: string;
                email: string;
            };
        } & {
            path: string;
            url: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            type: string;
            title: string | null;
            altText: string | null;
            fileName: string;
            storedName: string;
            thumbnailUrl: string | null;
            mimeType: string;
            size: number;
            width: number | null;
            height: number | null;
            uploadedById: number;
        })[];
    }>;
    uploadFiles(files: Express.Multer.File[], req: any): Promise<{
        data: ({
            uploadedBy: {
                id: number;
                name: string;
                email: string;
            };
        } & {
            path: string;
            url: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            type: string;
            title: string | null;
            altText: string | null;
            fileName: string;
            storedName: string;
            thumbnailUrl: string | null;
            mimeType: string;
            size: number;
            width: number | null;
            height: number | null;
            uploadedById: number;
        })[];
    }>;
    findAll(query: MediaQueryDto): Promise<{
        data: ({
            uploadedBy: {
                id: number;
                name: string;
                email: string;
            };
        } & {
            path: string;
            url: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            type: string;
            title: string | null;
            altText: string | null;
            fileName: string;
            storedName: string;
            thumbnailUrl: string | null;
            mimeType: string;
            size: number;
            width: number | null;
            height: number | null;
            uploadedById: number;
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
            products: {
                id: number;
                name: string;
            }[];
            uploadedBy: {
                id: number;
                name: string;
                email: string;
            };
        } & {
            path: string;
            url: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            type: string;
            title: string | null;
            altText: string | null;
            fileName: string;
            storedName: string;
            thumbnailUrl: string | null;
            mimeType: string;
            size: number;
            width: number | null;
            height: number | null;
            uploadedById: number;
        };
    }>;
    update(id: number, dto: UpdateMediaDto): Promise<{
        data: {
            path: string;
            url: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            type: string;
            title: string | null;
            altText: string | null;
            fileName: string;
            storedName: string;
            thumbnailUrl: string | null;
            mimeType: string;
            size: number;
            width: number | null;
            height: number | null;
            uploadedById: number;
        };
    }>;
    remove(id: number): Promise<{
        data: {
            success: boolean;
            detachedFrom: number;
        };
    }>;
}
