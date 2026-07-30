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
exports.AttributeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const permissions_decorator_1 = require("../common/decorators/permissions.decorator");
const attribute_service_1 = require("./attribute.service");
const create_attribute_dto_1 = require("./dto/create-attribute.dto");
const update_attribute_dto_1 = require("./dto/update-attribute.dto");
const create_attribute_value_dto_1 = require("./dto/create-attribute-value.dto");
const update_attribute_value_dto_1 = require("./dto/update-attribute-value.dto");
let AttributeController = class AttributeController {
    constructor(attributeService) {
        this.attributeService = attributeService;
    }
    findAll(query) {
        return this.attributeService.findAll(query);
    }
    findOne(id) {
        return this.attributeService.findOne(id);
    }
    create(dto) {
        return this.attributeService.create(dto);
    }
    update(id, dto) {
        return this.attributeService.update(id, dto);
    }
    remove(id) {
        return this.attributeService.remove(id);
    }
    findValue(valueId) {
        return this.attributeService.findValue(valueId);
    }
    addValue(id, dto) {
        return this.attributeService.addValue(id, dto);
    }
    updateValue(valueId, dto) {
        return this.attributeService.updateValue(valueId, dto);
    }
    removeValue(valueId) {
        return this.attributeService.removeValue(valueId);
    }
};
exports.AttributeController = AttributeController;
__decorate([
    (0, common_1.Get)(),
    (0, permissions_decorator_1.Permissions)('attribute:read'),
    (0, swagger_1.ApiOperation)({ summary: 'List all attributes (paginated, searchable, filterable by type)' }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'type', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, example: '1' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, example: '10' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AttributeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, permissions_decorator_1.Permissions)('attribute:read'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single attribute with all its values' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AttributeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, permissions_decorator_1.Permissions)('attribute:create'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new attribute (with optional inline values)' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_attribute_dto_1.CreateAttributeDto]),
    __metadata("design:returntype", void 0)
], AttributeController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, permissions_decorator_1.Permissions)('attribute:update'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an attribute name, slug, or type' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_attribute_dto_1.UpdateAttributeDto]),
    __metadata("design:returntype", void 0)
], AttributeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, permissions_decorator_1.Permissions)('attribute:delete'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete an attribute — blocked if any of its values are used by a product variant',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AttributeController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('value/:valueId'),
    (0, permissions_decorator_1.Permissions)('attribute:read'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single attribute value by ID' }),
    (0, swagger_1.ApiParam)({ name: 'valueId', type: Number }),
    __param(0, (0, common_1.Param)('valueId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AttributeController.prototype, "findValue", null);
__decorate([
    (0, common_1.Post)(':id/value'),
    (0, permissions_decorator_1.Permissions)('attribute:update'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Add a value to an existing attribute' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_attribute_value_dto_1.CreateAttributeValueDto]),
    __metadata("design:returntype", void 0)
], AttributeController.prototype, "addValue", null);
__decorate([
    (0, common_1.Patch)('value/:valueId'),
    (0, permissions_decorator_1.Permissions)('attribute:update'),
    (0, swagger_1.ApiOperation)({ summary: 'Edit an attribute value' }),
    (0, swagger_1.ApiParam)({ name: 'valueId', type: Number }),
    __param(0, (0, common_1.Param)('valueId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_attribute_value_dto_1.UpdateAttributeValueDto]),
    __metadata("design:returntype", void 0)
], AttributeController.prototype, "updateValue", null);
__decorate([
    (0, common_1.Delete)('value/:valueId'),
    (0, permissions_decorator_1.Permissions)('attribute:update'),
    (0, swagger_1.ApiOperation)({
        summary: 'Remove a value — blocked if it is used by a product variant',
    }),
    (0, swagger_1.ApiParam)({ name: 'valueId', type: Number }),
    __param(0, (0, common_1.Param)('valueId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AttributeController.prototype, "removeValue", null);
exports.AttributeController = AttributeController = __decorate([
    (0, swagger_1.ApiTags)('Attribute'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('attribute'),
    __metadata("design:paramtypes", [attribute_service_1.AttributeService])
], AttributeController);
//# sourceMappingURL=attribute.controller.js.map