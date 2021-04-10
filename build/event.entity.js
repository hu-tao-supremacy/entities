"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const event_duration_entity_1 = require("./event-duration.entity");
const location_entity_1 = require("./location.entity");
const organization_entity_1 = require("./organization.entity");
const question_group_entity_1 = require("./question-group.entity");
const tag_entity_1 = require("./tag.entity");
const user_event_entity_1 = require("./user-event.entity");
let Event = class Event {
};
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn()
], Event.prototype, "id", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], Event.prototype, "organizationId", void 0);
__decorate([
    graphql_1.Field((_) => organization_entity_1.Organization),
    typeorm_1.ManyToOne(() => organization_entity_1.Organization, { onDelete: 'CASCADE' })
], Event.prototype, "organization", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int, { nullable: true }),
    typeorm_1.Column({ nullable: true })
], Event.prototype, "locationId", void 0);
__decorate([
    graphql_1.Field((_) => location_entity_1.Location, { nullable: true }),
    typeorm_1.ManyToOne(() => location_entity_1.Location)
], Event.prototype, "location", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column()
], Event.prototype, "description", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column()
], Event.prototype, "name", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Event.prototype, "coverImageUrl", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Event.prototype, "coverImageHash", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Event.prototype, "posterImageUrl", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Event.prototype, "posterImageHash", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Event.prototype, "profileImageUrl", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Event.prototype, "profileImageHash", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], Event.prototype, "attendeeLimit", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], Event.prototype, "contact", void 0);
__decorate([
    graphql_1.Field((_) => [question_group_entity_1.QuestionGroup]),
    typeorm_1.OneToMany(() => question_group_entity_1.QuestionGroup, (questionGroup) => questionGroup.event)
], Event.prototype, "questionGroups", void 0);
__decorate([
    graphql_1.Field((_) => [event_duration_entity_1.EventDuration]),
    typeorm_1.OneToMany(() => event_duration_entity_1.EventDuration, (duration) => duration.event)
], Event.prototype, "durations", void 0);
__decorate([
    graphql_1.Field((_) => [tag_entity_1.Tag])
], Event.prototype, "tags", void 0);
__decorate([
    graphql_1.Field(() => user_event_entity_1.Attendance, { nullable: true })
], Event.prototype, "attendance", void 0);
Event = __decorate([
    graphql_1.InputType('EventInput'),
    graphql_1.ObjectType(),
    typeorm_1.Index(['organizationId', 'name'], { unique: true }),
    typeorm_1.Entity()
], Event);
exports.Event = Event;
