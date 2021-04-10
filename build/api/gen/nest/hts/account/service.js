"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACCOUNT_SERVICE_NAME = exports.AccountServiceControllerMethods = exports.HTS_ACCOUNT_PACKAGE_NAME = exports.Role = exports.protobufPackage = void 0;
/* eslint-disable */
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "hts.account";
var Role;
(function (Role) {
    Role[Role["ROLE_UNSPECIFIED"] = 0] = "ROLE_UNSPECIFIED";
    Role[Role["ORGANIZATION_OWNER"] = 1] = "ORGANIZATION_OWNER";
    Role[Role["ORGANIZATION_EDITOR"] = 2] = "ORGANIZATION_EDITOR";
    Role[Role["ORGANIZATION_MEMBER"] = 3] = "ORGANIZATION_MEMBER";
    Role[Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Role = exports.Role || (exports.Role = {}));
exports.HTS_ACCOUNT_PACKAGE_NAME = "hts.account";
function AccountServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "createUser",
            "getUserByChulaId",
            "getUserByEmail",
            "isAuthenticated",
            "updateAccountInfo",
            "updateUserInterests",
            "getUserById",
            "generateAccessToken",
            "hasPermission",
            "assignRole",
            "removeRole",
            "ping",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            microservices_1.GrpcMethod("AccountService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            microservices_1.GrpcStreamMethod("AccountService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.AccountServiceControllerMethods = AccountServiceControllerMethods;
exports.ACCOUNT_SERVICE_NAME = "AccountService";
