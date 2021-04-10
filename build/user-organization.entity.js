"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrganization = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const organization_entity_1 = require("./organization.entity");
const user_entity_1 = require("./user.entity");
let UserOrganization = class UserOrganization {
};
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn()
], UserOrganization.prototype, "id", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], UserOrganization.prototype, "userId", void 0);
__decorate([
    graphql_1.Field((_) => user_entity_1.User),
    typeorm_1.ManyToOne(() => user_entity_1.User, { onDelete: 'CASCADE' })
], UserOrganization.prototype, "user", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], UserOrganization.prototype, "organizationId", void 0);
__decorate([
    graphql_1.Field((_) => organization_entity_1.Organization),
    typeorm_1.ManyToOne(() => organization_entity_1.Organization, { onDelete: 'CASCADE' })
], UserOrganization.prototype, "organization", void 0);
UserOrganization = __decorate([
    graphql_1.InputType('UserOrganizationInput'),
    graphql_1.ObjectType(),
    typeorm_1.Index(['userId', 'organizationId'], { unique: true }),
    typeorm_1.Entity()
], UserOrganization);
exports.UserOrganization = UserOrganization;
