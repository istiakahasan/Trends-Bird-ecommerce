import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private jwtService;
    private prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    login(body: any): Promise<{
        data: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
}
