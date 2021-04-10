"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PARTICIPANT_SERVICE_NAME = exports.ParticipantServiceControllerMethods = exports.HTS_PARTICIPANT_PACKAGE_NAME = exports.protobufPackage = void 0;
/* eslint-disable */
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "hts.participant";
exports.HTS_PARTICIPANT_PACKAGE_NAME = "hts.participant";
function ParticipantServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "isEventAvailable",
            "joinEvent",
            "cancelEvent",
            "submitAnswersForEventQuestion",
            "getEventById",
            "getAllEvents",
            "getAllTags",
            "getSuggestedEvents",
            "getUpcomingEvents",
            "getEventsByStringOfName",
            "getEventsByTagIds",
            "getEventsByOrganizationId",
            "getEventsByFacilityId",
            "getEventsByDate",
            "getLocationById",
            "getTagsByEventId",
            "getRatingByEventId",
            "getApprovedUserByEventId",
            "getEventDurationsByEventId",
            "getQuestionGroupsByEventId",
            "getQuestionsByQuestionGroupId",
            "getAnswersByQuestionId",
            "getUserAnswerByQuestionId",
            "getEventsByUserId",
            "getUserEventByUserAndEventId",
            "generateQR",
            "ping",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            microservices_1.GrpcMethod("ParticipantService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            microservices_1.GrpcStreamMethod("ParticipantService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.ParticipantServiceControllerMethods = ParticipantServiceControllerMethods;
exports.PARTICIPANT_SERVICE_NAME = "ParticipantService";
