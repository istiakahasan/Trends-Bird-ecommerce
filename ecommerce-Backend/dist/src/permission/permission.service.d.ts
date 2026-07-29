import { PrismaService } from '../prisma/prisma.service';
export declare class PermissionService {
    private prisma;
    constructor(prisma: PrismaService);
    private normalizeName;
    createGroup(body: {
        name: string;
        description?: string;
        actions: string[];
    }): Promise<{
        data: {
            permissions: {
                id: number;
                name: string;
                description: string | null;
                groupId: number;
            }[];
        } & {
            id: number;
            name: string;
            description: string | null;
        };
    }>;
    getGroups(query: {
        search?: string;
        page?: string;
        limit?: string;
    }): Promise<{
        data: ({
            permissions: {
                id: number;
                name: string;
                description: string | null;
                groupId: number;
            }[];
        } & {
            id: number;
            name: string;
            description: string | null;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    updateGroup(id: number, body: {
        actionsToAdd?: string[];
        actionsToRemove?: string[];
    }): Promise<{
        data: {
            permissions: {
                id: number;
                name: string;
                description: string | null;
                groupId: number;
            }[];
        } & {
            id: number;
            name: string;
            description: string | null;
        };
    }>;
    deleteGroup(id: number): Promise<{
        data: {
            success: boolean;
        };
    }>;
    deletePermission(id: number): Promise<{
        data: {
            success: boolean;
        };
    }>;
}
