"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(jwtService, prisma) {
        this.jwtService = jwtService;
        this.prisma = prisma;
    }
    async login(body) {
        const { email, password } = body;
        const user = await this.prisma.user.findUnique({
            where: { email },
            include: {
                role: {
                    include: { permissions: true }
                }
            }
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        if (!user.active) {
            throw new common_1.UnauthorizedException('User inactive');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Wrong password');
        }
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role?.name || null,
            permissions: user.role?.permissions.map(p => p.name) || [],
        };
        const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
        const refreshToken = this.jwtService.sign({ sub: user.id }, { expiresIn: '7d' });
        const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
        await this.prisma.user.update({
            where: { id: user.id },
            data: { refreshToken: hashedRefreshToken }
        });
        return {
            data: {
                accessToken,
                refreshToken,
            }
        };
    }
    async refresh(body) {
        const { refreshToken } = body;
        if (!refreshToken)
            throw new common_1.UnauthorizedException('No refresh token provided');
        try {
            const decoded = this.jwtService.verify(refreshToken);
            const userId = decoded.sub;
            const user = await this.prisma.user.findUnique({
                where: { id: userId },
                include: {
                    role: {
                        include: { permissions: true }
                    }
                }
            });
            if (!user || !user.active || !user.refreshToken) {
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
            const isMatch = await bcrypt.compare(refreshToken, user.refreshToken);
            if (!isMatch) {
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
            const payload = {
                sub: user.id,
                email: user.email,
                role: user.role?.name || null,
                permissions: user.role?.permissions.map(p => p.name) || [],
            };
            const newAccessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
            const newRefreshToken = this.jwtService.sign({ sub: user.id }, { expiresIn: '7d' });
            const hashedNewRefreshToken = await bcrypt.hash(newRefreshToken, 10);
            await this.prisma.user.update({
                where: { id: user.id },
                data: { refreshToken: hashedNewRefreshToken }
            });
            return {
                data: {
                    accessToken: newAccessToken,
                    refreshToken: newRefreshToken
                }
            };
        }
        catch (e) {
            throw new common_1.UnauthorizedException('Invalid or expired refresh token');
        }
    }
    async logout(userId) {
        await this.prisma.user.update({
            where: { id: userId },
            data: { refreshToken: null }
        });
        return { data: { success: true } };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map