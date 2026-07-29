"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
let GlobalExceptionFilter = class GlobalExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            message = exception.getResponse();
        }
        else if (exception &&
            typeof exception === 'object' &&
            'code' in exception &&
            typeof exception.code === 'string') {
            const e = exception;
            if (e.code === 'P2002') {
                status = common_1.HttpStatus.CONFLICT;
                message = 'A record with this unique value already exists.';
            }
            else if (e.code === 'P2025') {
                status = common_1.HttpStatus.NOT_FOUND;
                message = 'Record not found.';
            }
            else if (e.code === 'P2003') {
                status = common_1.HttpStatus.BAD_REQUEST;
                message = 'Related record not found (foreign key constraint failed).';
            }
            else {
                console.error('Prisma Error:', exception);
            }
        }
        else {
            console.error('Unhandled Exception:', exception);
        }
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: ctx.getRequest().url,
            message: typeof message === 'string' ? message : message.message || message,
        });
    }
};
exports.GlobalExceptionFilter = GlobalExceptionFilter;
exports.GlobalExceptionFilter = GlobalExceptionFilter = __decorate([
    (0, common_1.Catch)()
], GlobalExceptionFilter);
//# sourceMappingURL=http-exception.filter.js.map