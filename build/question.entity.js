"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("api/gen/gql/hts/common/common");
const typeorm_1 = require("typeorm");
const question_group_entity_1 = require("./question-group.entity");
const lodash_1 = require("lodash");
const answer_entity_1 = require("./answer.entity");
const PickedAnswerType = lodash_1.pick(common_1.AnswerType, ['SCALE', 'TEXT']);
graphql_1.registerEnumType(PickedAnswerType, { name: 'AnswerType' });
let Question = class Question {
};
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn()
], Question.prototype, "id", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], Question.prototype, "questionGroupId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => question_group_entity_1.QuestionGroup, { onDelete: 'CASCADE' })
], Question.prototype, "questionGroup", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], Question.prototype, "seq", void 0);
__decorate([
    graphql_1.Field((_) => PickedAnswerType),
    typeorm_1.Column('enum', { enum: ['SCALE', 'TEXT'] })
], Question.prototype, "answerType", void 0);
__decorate([
    graphql_1.Field((_) => Boolean),
    typeorm_1.Column({ default: false })
], Question.prototype, "isOptional", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column()
], Question.prototype, "title", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column()
], Question.prototype, "subtitle", void 0);
__decorate([
    graphql_1.Field(() => answer_entity_1.Answer)
], Question.prototype, "answer", void 0);
Question = __decorate([
    graphql_1.InputType('QuestionInput'),
    graphql_1.ObjectType(),
    typeorm_1.Index(['questionGroupId', 'seq'], { unique: true }),
    typeorm_1.Entity()
], Question);
exports.Question = Question;
