import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class StripCredentialsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => this.stripCredentials(data))
    );
  }

  private stripCredentials(data: any): any {
    if (data === null || data === undefined) {
      return data;
    }

    if (Array.isArray(data)) {
      return data.map(item => this.stripCredentials(item));
    }

    if (typeof data === 'object' && !(data instanceof Date)) {
      const strippedData = { ...data };
      
      if ('password' in strippedData) {
        delete strippedData.password;
      }
      
      if ('refreshToken' in strippedData) {
        delete strippedData.refreshToken;
      }

      for (const key in strippedData) {
        if (Object.prototype.hasOwnProperty.call(strippedData, key)) {
          strippedData[key] = this.stripCredentials(strippedData[key]);
        }
      }
      
      return strippedData;
    }

    return data;
  }
}
