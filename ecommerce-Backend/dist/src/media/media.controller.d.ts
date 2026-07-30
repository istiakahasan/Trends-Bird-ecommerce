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
                email: string;
                name: string;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            fileName: string;
            storedName: string;
            path: string;
            url: string;
            thumbnailUrl: string | null;
            mimeType: string;
            type: string;
            size: number;
            width: number | null;
            height: number | null;
            altText: string | null;
            title: string | null;
            uploadedById: number;
        })[];
    }>;
    uploadFiles(files: Express.Multer.File[], req: any): Promise<{
        data: ({
            uploadedBy: {
                id: number;
                email: string;
                name: string;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            fileName: string;
            storedName: string;
            path: string;
            url: string;
            thumbnailUrl: string | null;
            mimeType: string;
            type: string;
            size: number;
            width: number | null;
            height: number | null;
            altText: string | null;
            title: string | null;
            uploadedById: number;
        })[];
    }>;
    findAll(query: MediaQueryDto): Promise<{
        data: ({
            uploadedBy: {
                id: number;
                email: string;
                name: string;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            fileName: string;
            storedName: string;
            path: string;
            url: string;
            thumbnailUrl: string | null;
            mimeType: string;
            type: string;
            size: number;
            width: number | null;
            height: number | null;
            altText: string | null;
            title: string | null;
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
            uploadedBy: {
                id: number;
                email: string;
                name: string;
            };
            products: {
                id: number;
                name: string;
            }[];
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            fileName: string;
            storedName: string;
            path: string;
            url: string;
            thumbnailUrl: string | null;
            mimeType: string;
            type: string;
            size: number;
            width: number | null;
            height: number | null;
            altText: string | null;
            title: string | null;
            uploadedById: number;
        };
    }>;
    update(id: number, dto: UpdateMediaDto): Promise<{
        data: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            fileName: string;
            storedName: string;
            path: string;
            url: string;
            thumbnailUrl: string | null;
            mimeType: string;
            type: string;
            size: number;
            width: number | null;
            height: number | null;
            altText: string | null;
            title: string | null;
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
