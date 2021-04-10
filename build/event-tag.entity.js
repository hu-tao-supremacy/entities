"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTag = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const event_entity_1 = require("./event.entity");
const tag_entity_1 = require("./tag.entity");
let EventTag = class EventTag {
};
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn()
], EventTag.prototype, "id", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], EventTag.prototype, "eventId", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], EventTag.prototype, "tagId", void 0);
__decorate([
    graphql_1.Field((_) => event_entity_1.Event),
    typeorm_1.ManyToOne(() => event_entity_1.Event, { onDelete: 'CASCADE' })
], EventTag.prototype, "event", void 0);
__decorate([
    graphql_1.Field((_) => tag_entity_1.Tag),
    typeorm_1.ManyToOne(() => tag_entity_1.Tag, { onDelete: 'CASCADE' })
], EventTag.prototype, "tag", void 0);
EventTag = __decorate([
    graphql_1.InputType('EventTagInput'),
    graphql_1.ObjectType(),
    typeorm_1.Index(['eventId', 'tagId'], { unique: true }),
    typeorm_1.Entity()
], EventTag);
exports.EventTag = EventTag;
