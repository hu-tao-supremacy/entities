"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPermission = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_organization_entity_1 = require("./user-organization.entity");
let UserPermission = class UserPermission {
};
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn()
], UserPermission.prototype, "id", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], UserPermission.prototype, "userOrganizationId", void 0);
__decorate([
    graphql_1.Field((_) => user_organization_entity_1.UserOrganization),
    typeorm_1.ManyToOne(() => user_organization_entity_1.UserOrganization, { onDelete: 'CASCADE' })
], UserPermission.prototype, "userOrganization", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column()
], UserPermission.prototype, "permissionName", void 0);
UserPermission = __decorate([
    graphql_1.InputType('UserPermissionInput'),
    graphql_1.ObjectType(),
    typeorm_1.Index(['userOrganizationId', 'permissionName'], { unique: true }),
    typeorm_1.Entity()
], UserPermission);
exports.UserPermission = UserPermission;
