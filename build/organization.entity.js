"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const event_entity_1 = require("./event.entity");
let Organization = class Organization {
};
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn()
], Organization.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column({ unique: true })
], Organization.prototype, "name", void 0);
__decorate([
    graphql_1.Field((_) => Boolean),
    typeorm_1.Column()
], Organization.prototype, "isVerified", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Organization.prototype, "abbreviation", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Organization.prototype, "advisor", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Organization.prototype, "associatedFaculty", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Organization.prototype, "description", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Organization.prototype, "facebookPage", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Organization.prototype, "instagram", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Organization.prototype, "lineOfficialAccount", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Organization.prototype, "email", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Organization.prototype, "contactFullName", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Organization.prototype, "contactEmail", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Organization.prototype, "contactPhoneNumber", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Organization.prototype, "contactLineId", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Organization.prototype, "profilePictureUrl", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Organization.prototype, "profilePictureHash", void 0);
__decorate([
    graphql_1.Field((_) => [event_entity_1.Event])
], Organization.prototype, "events", void 0);
Organization = __decorate([
    graphql_1.InputType('OrganizationInput'),
    graphql_1.ObjectType(),
    typeorm_1.Entity()
], Organization);
exports.Organization = Organization;
