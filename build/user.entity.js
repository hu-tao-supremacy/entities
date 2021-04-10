"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const common_1 = require("@onepass/graphql/common/common");
const graphql_1 = require("@nestjs/graphql");
const lodash_1 = require("lodash");
const typeorm_1 = require("typeorm");
const event_entity_1 = require("./event.entity");
const organization_entity_1 = require("./organization.entity");
const tag_entity_1 = require("./tag.entity");
const PickedGender = lodash_1.pick(common_1.Gender, ['M', 'F', 'NS']);
graphql_1.registerEnumType(PickedGender, { name: 'Gender' });
let User = class User {
};
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn()
], User.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column()
], User.prototype, "firstName", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column()
], User.prototype, "lastName", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column({ unique: true })
], User.prototype, "email", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], User.prototype, "nickname", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Index({ unique: true, where: 'chula_id IS NOT NULL' }),
    typeorm_1.Column({ nullable: true })
], User.prototype, "chulaId", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], User.prototype, "address", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], User.prototype, "profilePictureUrl", void 0);
__decorate([
    graphql_1.Field((_) => Boolean),
    typeorm_1.Column()
], User.prototype, "isChulaStudent", void 0);
__decorate([
    graphql_1.Field((_) => Boolean),
    typeorm_1.Column()
], User.prototype, "didSetup", void 0);
__decorate([
    graphql_1.Field((_) => PickedGender),
    typeorm_1.Column('enum', { enum: ['M', 'F', 'NS'] })
], User.prototype, "gender", void 0);
__decorate([
    graphql_1.Field((_) => [organization_entity_1.Organization])
], User.prototype, "organizations", void 0);
__decorate([
    graphql_1.Field((_) => [event_entity_1.Event])
], User.prototype, "events", void 0);
__decorate([
    graphql_1.Field((_) => [tag_entity_1.Tag])
], User.prototype, "interests", void 0);
User = __decorate([
    graphql_1.InputType('UserInput'),
    graphql_1.ObjectType(),
    typeorm_1.Entity()
], User);
exports.User = User;
