"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facility = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const organization_entity_1 = require("./organization.entity");
let Facility = class Facility {
};
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn()
], Facility.prototype, "id", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], Facility.prototype, "organizationId", void 0);
__decorate([
    graphql_1.Field((_) => organization_entity_1.Organization),
    typeorm_1.ManyToOne(() => organization_entity_1.Organization, { onDelete: 'CASCADE' })
], Facility.prototype, "organization", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column({ unique: true })
], Facility.prototype, "name", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Float),
    typeorm_1.Column()
], Facility.prototype, "latitude", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Float),
    typeorm_1.Column()
], Facility.prototype, "longitude", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column('json')
], Facility.prototype, "operatingHours", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column()
], Facility.prototype, "description", void 0);
Facility = __decorate([
    graphql_1.InputType('FacilityInput'),
    graphql_1.ObjectType(),
    typeorm_1.Entity()
], Facility);
exports.Facility = Facility;
