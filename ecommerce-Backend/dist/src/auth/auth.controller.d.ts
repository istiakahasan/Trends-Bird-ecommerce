import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: any): Promise<{
        data: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    getMe(req: any): Promise<{
        data: any;
    }>;
}
