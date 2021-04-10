"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answer = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const question_entity_1 = require("./question.entity");
const user_event_entity_1 = require("./user-event.entity");
let Answer = class Answer {
};
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn()
], Answer.prototype, "id", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], Answer.prototype, "userEventId", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], Answer.prototype, "questionId", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column()
], Answer.prototype, "value", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_event_entity_1.UserEvent, { onDelete: 'CASCADE' })
], Answer.prototype, "userEvent", void 0);
__decorate([
    typeorm_1.ManyToOne(() => question_entity_1.Question, { onDelete: 'CASCADE' })
], Answer.prototype, "question", void 0);
Answer = __decorate([
    graphql_1.InputType('AnswerInput'),
    graphql_1.ObjectType(),
    typeorm_1.Index(['userEventId', 'questionId'], { unique: true }),
    typeorm_1.Entity()
], Answer);
exports.Answer = Answer;
