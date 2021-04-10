"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityRequest = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("./api/gen/gql/hts/common/common");
const typeorm_1 = require("typeorm");
const event_entity_1 = require("./event.entity");
const facility_entity_1 = require("./facility.entity");
graphql_1.registerEnumType(common_1.FacilityRequest_Status, { name: 'FacilityRequestStatus' });
let FacilityRequest = class FacilityRequest {
};
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn()
], FacilityRequest.prototype, "id", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], FacilityRequest.prototype, "eventId", void 0);
__decorate([
    graphql_1.Field((_) => event_entity_1.Event),
    typeorm_1.ManyToOne(() => event_entity_1.Event)
], FacilityRequest.prototype, "event", void 0);
__decorate([
    graphql_1.Field((_) => graphql_1.Int),
    typeorm_1.Column()
], FacilityRequest.prototype, "facilityId", void 0);
__decorate([
    graphql_1.Field((_) => facility_entity_1.Facility),
    typeorm_1.ManyToOne(() => facility_entity_1.Facility, { onDelete: 'CASCADE' })
], FacilityRequest.prototype, "facility", void 0);
__decorate([
    graphql_1.Field((_) => common_1.FacilityRequest_Status),
    typeorm_1.Column('enum', { enum: ['PENDING', 'APPROVED', 'REJECTED'] })
], FacilityRequest.prototype, "status", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true })
], FacilityRequest.prototype, "rejectReason", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column('timestamptz', { nullable: true })
], FacilityRequest.prototype, "start", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column('timestamptz', { nullable: true })
], FacilityRequest.prototype, "finish", void 0);
FacilityRequest = __decorate([
    graphql_1.InputType('FacilityRequestInput'),
    graphql_1.ObjectType(),
    typeorm_1.Entity()
], FacilityRequest);
exports.FacilityRequest = FacilityRequest;
