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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionController = void 0;
const common_1 = require("@nestjs/common");
const permission_service_1 = require("./permission.service");
const permissions_decorator_1 = require("../common/decorators/permissions.decorator");
let PermissionController = class PermissionController {
    constructor(permissionService) {
        this.permissionService = permissionService;
    }
    async createGroup(body) {
        return this.permissionService.createGroup(body);
    }
    async getGroups(query) {
        return this.permissionService.getGroups(query);
    }
    async updateGroup(id, body) {
        return this.permissionService.updateGroup(id, body);
    }
    async deleteGroup(id) {
        return this.permissionService.deleteGroup(id);
    }
    async deletePermission(id) {
        return this.permissionService.deletePermission(id);
    }
};
exports.PermissionController = PermissionController;
__decorate([
    (0, permissions_decorator_1.Permissions)('permission:create'),
    (0, common_1.Post)('group'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "createGroup", null);
__decorate([
    (0, permissions_decorator_1.Permissions)('permission:read'),
    (0, common_1.Get)('group'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "getGroups", null);
__decorate([
    (0, permissions_decorator_1.Permissions)('permission:update'),
    (0, common_1.Patch)('group/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "updateGroup", null);
__decorate([
    (0, permissions_decorator_1.Permissions)('permission:delete'),
    (0, common_1.Delete)('group/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "deleteGroup", null);
__decorate([
    (0, permissions_decorator_1.Permissions)('permission:delete'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "deletePermission", null);
exports.PermissionController = PermissionController = __decorate([
    (0, common_1.Controller)('permission'),
    __metadata("design:paramtypes", [permission_service_1.PermissionService])
], PermissionController);
//# sourceMappingURL=permission.controller.js.map