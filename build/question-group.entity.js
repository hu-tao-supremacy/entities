"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionGroup = exports.PickedQuestionGroupType = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@onepass/graphql/common/common");
const typeorm_1 = require("typeorm");
const event_entity_1 = require("./event.entity");
const question_entity_1 = require("./question.entity");
const lodash_1 = require("lodash");
exports.PickedQuestionGroupType = lodash_1.pick(common_1.QuestionGroupType, ['PRE_EVENT', 'POST_EVENT']);
graphql_1.registerEnumType(exports.PickedQuestionGroupType, { name: 'QuestionGroupType' });
let QuestionGroup = class QuestionGroup {
};
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn()
], QuestionGroup.prototype, "id", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], QuestionGroup.prototype, "eventId", void 0);
__decorate([
    graphql_1.Field((_) => event_entity_1.Event),
    typeorm_1.ManyToOne(() => event_entity_1.Event, { onDelete: 'CASCADE' })
], QuestionGroup.prototype, "event", void 0);
__decorate([
    graphql_1.Field((_) => exports.PickedQuestionGroupType),
    typeorm_1.Column('enum', { enum: ['PRE_EVENT', 'POST_EVENT'] })
], QuestionGroup.prototype, "type", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], QuestionGroup.prototype, "seq", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column()
], QuestionGroup.prototype, "title", void 0);
__decorate([
    graphql_1.Field((_) => [question_entity_1.Question]),
    typeorm_1.OneToMany(() => question_entity_1.Question, (question) => question.questionGroup)
], QuestionGroup.prototype, "questions", void 0);
QuestionGroup = __decorate([
    graphql_1.InputType('QuestionGroupInput'),
    graphql_1.ObjectType(),
    typeorm_1.Index(['eventId', 'type', 'seq'], { unique: true }),
    typeorm_1.Entity()
], QuestionGroup);
exports.QuestionGroup = QuestionGroup;
