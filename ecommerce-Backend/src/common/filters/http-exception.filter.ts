import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: string | object = 'Internal server error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.getResponse();
    } else if (
      exception &&
      typeof exception === 'object' &&
      'code' in exception &&
      typeof (exception as any).code === 'string'
    ) {
      const e = exception as any;
      if (e.code === 'P2002') {
        status = HttpStatus.CONFLICT;
        message = 'A record with this unique value already exists.';
      } else if (e.code === 'P2025') {
        status = HttpStatus.NOT_FOUND;
        message = 'Record not found.';
      } else if (e.code === 'P2003') {
        status = HttpStatus.BAD_REQUEST;
        message = 'Related record not found (foreign key constraint failed).';
      } else {
        console.error('Prisma Error:', exception);
      }
    } else {
      console.error('Unhandled Exception:', exception);
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: ctx.getRequest().url,
      message: typeof message === 'string' ? message : (message as any).message || message,
    });
  }
}