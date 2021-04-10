"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = exports.protobufPackage = void 0;
exports.protobufPackage = "hts.account";
var Role;
(function (Role) {
    Role[Role["ROLE_UNSPECIFIED"] = 0] = "ROLE_UNSPECIFIED";
    Role[Role["ORGANIZATION_OWNER"] = 1] = "ORGANIZATION_OWNER";
    Role[Role["ORGANIZATION_EDITOR"] = 2] = "ORGANIZATION_EDITOR";
    Role[Role["ORGANIZATION_MEMBER"] = 3] = "ORGANIZATION_MEMBER";
    Role[Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Role = exports.Role || (exports.Role = {}));
