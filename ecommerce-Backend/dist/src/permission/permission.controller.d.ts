import { PermissionService } from './permission.service';
export declare class PermissionController {
    private readonly permissionService;
    constructor(permissionService: PermissionService);
    createGroup(body: any): Promise<{
        data: {
            permissions: {
                name: string;
                id: number;
                description: string | null;
                groupId: number;
            }[];
        } & {
            name: string;
            id: number;
            description: string | null;
        };
    }>;
    getGroups(query: any): Promise<{
        data: ({
            permissions: {
                name: string;
                id: number;
                description: string | null;
                groupId: number;
            }[];
        } & {
            name: string;
            id: number;
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
                name: string;
                id: number;
                description: string | null;
                groupId: number;
            }[];
        } & {
            name: string;
            id: number;
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
