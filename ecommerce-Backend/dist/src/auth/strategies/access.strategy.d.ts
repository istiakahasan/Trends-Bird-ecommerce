import { ConfigService } from '@nestjs/config';
declare const AccessStrategy_base: new (...args: any) => any;
export declare class AccessStrategy extends AccessStrategy_base {
    constructor(configService: ConfigService);
    validate(payload: any): Promise<{
        userId: any;
        email: any;
        role: any;
        permissions: any;
    }>;
}
export {};
