import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthController {
    private authService;
    private prisma;
    constructor(authService: AuthService, prisma: PrismaService);
    login(body: any): Promise<{
        data: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    refresh(body: any): Promise<{
        data: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    logout(req: any): Promise<{
        data: {
            success: boolean;
        };
    }>;
    getMe(req: any): Promise<{
        data: {
            sub: number;
            email: string;
            role: string;
            permissions: string[];
        };
    }>;
}
