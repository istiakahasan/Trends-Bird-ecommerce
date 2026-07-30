"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./common/app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, whitelist: true }));
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'https://trends-bird-frontend-hx7n.onrender.com',
        ],
        credentials: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('E-Commerce API')
        .setDescription('E-Commerce Backend API documentation')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map