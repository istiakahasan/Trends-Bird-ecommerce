"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripCredentialsInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let StripCredentialsInterceptor = class StripCredentialsInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)(data => this.stripCredentials(data)));
    }
    stripCredentials(data) {
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
};
exports.StripCredentialsInterceptor = StripCredentialsInterceptor;
exports.StripCredentialsInterceptor = StripCredentialsInterceptor = __decorate([
    (0, common_1.Injectable)()
], StripCredentialsInterceptor);
//# sourceMappingURL=strip-credentials.interceptor.js.map