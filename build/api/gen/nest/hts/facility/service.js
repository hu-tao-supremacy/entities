"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FACILITY_SERVICE_NAME = exports.FacilityServiceControllerMethods = exports.HTS_FACILITY_PACKAGE_NAME = exports.protobufPackage = void 0;
/* eslint-disable */
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "hts.facility";
exports.HTS_FACILITY_PACKAGE_NAME = "hts.facility";
function FacilityServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "getFacilityList",
            "getFacilityRequestList",
            "getFacilityRequestsListStatus",
            "getFacilityRequestStatus",
            "getFacilityRequestStatusFull",
            "getAvailableFacilityList",
            "getAvailableTimeOfFacility",
            "createFacilityRequest",
            "approveFacilityRequest",
            "rejectFacilityRequest",
            "getFacilityInfo",
            "ping",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            microservices_1.GrpcMethod("FacilityService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            microservices_1.GrpcStreamMethod("FacilityService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.FacilityServiceControllerMethods = FacilityServiceControllerMethods;
exports.FACILITY_SERVICE_NAME = "FacilityService";
