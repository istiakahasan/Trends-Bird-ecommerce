import { PrismaService } from '../prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        data: {
            role: {
                id: number;
                name: string;
            };
        } & {
            id: number;
            name: string | null;
            email: string;
            password: string;
            phone: string | null;
            gender: string | null;
            avatar: string | null;
            active: boolean;
            refreshToken: string | null;
            roleId: number;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    findAll(query: {
        search?: string;
        roleId?: string;
        active?: string;
        page?: string;
        limit?: string;
    }): Promise<{
        data: ({
            role: {
                id: number;
                name: string;
            };
        } & {
            id: number;
            name: string | null;
            email: string;
            password: string;
            phone: string | null;
            gender: string | null;
            avatar: string | null;
            active: boolean;
            refreshToken: string | null;
            roleId: number;
            createdAt: Date;
            updatedAt: Date;
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
            role: {
                id: number;
                name: string;
            };
        } & {
            id: number;
            name: string | null;
            email: string;
            password: string;
            phone: string | null;
            gender: string | null;
            avatar: string | null;
            active: boolean;
            refreshToken: string | null;
            roleId: number;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    update(id: number, currentUserId: number, body: any): Promise<{
        data: {
            role: {
                id: number;
                name: string;
            };
        } & {
            id: number;
            name: string | null;
            email: string;
            password: string;
            phone: string | null;
            gender: string | null;
            avatar: string | null;
            active: boolean;
            refreshToken: string | null;
            roleId: number;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    remove(id: number): Promise<{
        data: {
            success: boolean;
        };
    }>;
}
