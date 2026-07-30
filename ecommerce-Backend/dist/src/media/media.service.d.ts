import { PrismaService } from '../prisma/prisma.service';
import { UpdateMediaDto } from './dto/update-media.dto';
import { MediaQueryDto } from './dto/media-query.dto';
export declare class MediaService {
    private prisma;
    constructor(prisma: PrismaService);
    processSingleFile(file: Express.Multer.File, userId: number): Promise<{
        uploadedBy: {
            id: number;
            email: string;
            name: string;
        };
    } & {
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
        createdAt: Date;
        updatedAt: Date;
        id: number;
        uploadedById: number;
    }>;
    uploadFiles(files: Express.Multer.File[], userId: number): Promise<{
        data: ({
            uploadedBy: {
                id: number;
                email: string;
                name: string;
            };
        } & {
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
            createdAt: Date;
            updatedAt: Date;
            id: number;
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
            createdAt: Date;
            updatedAt: Date;
            id: number;
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
            createdAt: Date;
            updatedAt: Date;
            id: number;
            uploadedById: number;
        };
    }>;
    update(id: number, dto: UpdateMediaDto): Promise<{
        data: {
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
            createdAt: Date;
            updatedAt: Date;
            id: number;
            uploadedById: number;
        };
    }>;
    remove(id: number): Promise<{
        data: {
            success: boolean;
            detachedFrom: number;
        };
    }>;
    private deleteFileFromDisk;
}
