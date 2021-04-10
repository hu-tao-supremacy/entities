"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORGANIZER_SERVICE_NAME = exports.OrganizerServiceControllerMethods = exports.HTS_ORGANIZER_PACKAGE_NAME = exports.protobufPackage = void 0;
/* eslint-disable */
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "hts.organizer";
exports.HTS_ORGANIZER_PACKAGE_NAME = "hts.organizer";
function OrganizerServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "createOrganization",
            "getOrganizations",
            "getOrganizationById",
            "updateOrganization",
            "removeOrganization",
            "addUsersToOrganization",
            "removeUsersFromOrganization",
            "createEvent",
            "updateEvent",
            "updateEventDurations",
            "removeEvent",
            "updateRegistrationRequest",
            "createTag",
            "addTags",
            "removeTags",
            "hasEvent",
            "addQuestionGroups",
            "removeQuestionGroups",
            "addQuestions",
            "removeQuestions",
            "ping",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            microservices_1.GrpcMethod("OrganizerService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            microservices_1.GrpcStreamMethod("OrganizerService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.OrganizerServiceControllerMethods = OrganizerServiceControllerMethods;
exports.ORGANIZER_SERVICE_NAME = "OrganizerService";
