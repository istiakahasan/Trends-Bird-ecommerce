import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(query: any): Promise<{
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
    update(id: number, body: any, req: any): Promise<{
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
