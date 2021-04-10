"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let Location = class Location {
};
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn()
], Location.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column()
], Location.prototype, "name", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column()
], Location.prototype, "googleMapUrl", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Location.prototype, "description", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Location.prototype, "travelInformationImageUrl", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Location.prototype, "travelInformationImageHash", void 0);
Location = __decorate([
    graphql_1.InputType('LocationInput'),
    graphql_1.ObjectType(),
    typeorm_1.Entity()
], Location);
exports.Location = Location;
