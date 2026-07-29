import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(query: any): Promise<{
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
    update(id: number, body: any, req: any): Promise<{
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
