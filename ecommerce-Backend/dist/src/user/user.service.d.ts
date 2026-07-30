import { PrismaService } from '../prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        data: {
            role: {
                name: string;
                id: number;
            };
        } & {
            name: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            phone: string | null;
            gender: string | null;
            avatar: string | null;
            active: boolean;
            refreshToken: string | null;
            roleId: number;
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
                name: string;
                id: number;
            };
        } & {
            name: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            phone: string | null;
            gender: string | null;
            avatar: string | null;
            active: boolean;
            refreshToken: string | null;
            roleId: number;
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
                name: string;
                id: number;
            };
        } & {
            name: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            phone: string | null;
            gender: string | null;
            avatar: string | null;
            active: boolean;
            refreshToken: string | null;
            roleId: number;
        };
    }>;
    update(id: number, currentUserId: number, body: any): Promise<{
        data: {
            role: {
                name: string;
                id: number;
            };
        } & {
            name: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            phone: string | null;
            gender: string | null;
            avatar: string | null;
            active: boolean;
            refreshToken: string | null;
            roleId: number;
        };
    }>;
    remove(id: number): Promise<{
        data: {
            success: boolean;
        };
    }>;
}
