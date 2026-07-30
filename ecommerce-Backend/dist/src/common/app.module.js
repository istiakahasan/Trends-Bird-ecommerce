"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const auth_guard_1 = require("./guards/auth.guard");
const permissions_guard_1 = require("./guards/permissions.guard");
const http_exception_filter_1 = require("./filters/http-exception.filter");
const transform_interceptor_1 = require("./interceptors/transform.interceptor");
const strip_credentials_interceptor_1 = require("./interceptors/strip-credentials.interceptor");
const prisma_module_1 = require("../prisma/prisma.module");
const auth_module_1 = require("../auth/auth.module");
const user_module_1 = require("../user/user.module");
const product_module_1 = require("../product/product.module");
const brand_module_1 = require("../brand/brand.module");
const category_module_1 = require("../category/category.module");
const media_module_1 = require("../media/media.module");
const permission_module_1 = require("../permission/permission.module");
const role_module_1 = require("../role/role.module");
const attribute_module_1 = require("../attribute/attribute.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(process.cwd(), 'uploads'),
                serveRoot: '/uploads',
                serveStaticOptions: { index: false },
            }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            product_module_1.ProductModule,
            brand_module_1.BrandModule,
            category_module_1.CategoryModule,
            media_module_1.MediaModule,
            permission_module_1.PermissionModule,
            role_module_1.RoleModule,
            attribute_module_1.AttributeModule,
        ],
        providers: [
            { provide: core_1.APP_GUARD, useClass: auth_guard_1.AuthGuard },
            { provide: core_1.APP_GUARD, useClass: permissions_guard_1.PermissionsGuard },
            { provide: core_1.APP_FILTER, useClass: http_exception_filter_1.GlobalExceptionFilter },
            { provide: core_1.APP_INTERCEPTOR, useClass: transform_interceptor_1.TransformInterceptor },
            { provide: core_1.APP_INTERCEPTOR, useClass: strip_credentials_interceptor_1.StripCredentialsInterceptor },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map