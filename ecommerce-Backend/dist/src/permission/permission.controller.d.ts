import { PermissionService } from './permission.service';
export declare class PermissionController {
    private readonly permissionService;
    constructor(permissionService: PermissionService);
    createGroup(body: any): Promise<{
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
    getGroups(query: any): Promise<{
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
    updateGroup(id: number, body: any): Promise<{
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
