"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const event_entity_1 = require("./event.entity");
let Tag = class Tag {
};
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn()
], Tag.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column({ unique: true })
], Tag.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => [event_entity_1.Event])
], Tag.prototype, "events", void 0);
Tag = __decorate([
    graphql_1.InputType('TagInput'),
    graphql_1.ObjectType(),
    typeorm_1.Entity()
], Tag);
exports.Tag = Tag;
