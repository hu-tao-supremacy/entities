"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attendance = exports.UserEvent = void 0;
const common_1 = require("api/gen/gql/hts/common/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const event_entity_1 = require("./event.entity");
const user_entity_1 = require("./user.entity");
const lodash_1 = require("lodash");
const PickedStatus = lodash_1.pick(common_1.UserEvent_Status, ['APPROVED', 'REJECTED', 'PENDING']);
graphql_1.registerEnumType(PickedStatus, { name: 'UserEventStatus' });
let UserEvent = class UserEvent {
};
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn()
], UserEvent.prototype, "id", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], UserEvent.prototype, "userId", void 0);
__decorate([
    graphql_1.Field((_) => user_entity_1.User),
    typeorm_1.ManyToOne(() => user_entity_1.User, { onDelete: 'CASCADE' })
], UserEvent.prototype, "user", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], UserEvent.prototype, "eventId", void 0);
__decorate([
    graphql_1.Field((_) => event_entity_1.Event),
    typeorm_1.ManyToOne(() => event_entity_1.Event, { onDelete: 'CASCADE' })
], UserEvent.prototype, "event", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int, { nullable: true }),
    typeorm_1.Column({ nullable: true })
], UserEvent.prototype, "rating", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], UserEvent.prototype, "ticket", void 0);
__decorate([
    graphql_1.Field((_) => PickedStatus),
    typeorm_1.Column('enum', { enum: ['PENDING', 'APPROVED', 'REJECTED'] })
], UserEvent.prototype, "status", void 0);
UserEvent = __decorate([
    graphql_1.InputType('UserEventInput'),
    graphql_1.ObjectType(),
    typeorm_1.Index(['userId', 'eventId'], { unique: true }),
    typeorm_1.Index(['eventId', 'ticket'], { unique: true }),
    typeorm_1.Entity()
], UserEvent);
exports.UserEvent = UserEvent;
let Attendance = class Attendance extends UserEvent {
};
Attendance = __decorate([
    graphql_1.InputType('AttendanceInput'),
    graphql_1.ObjectType()
], Attendance);
exports.Attendance = Attendance;
