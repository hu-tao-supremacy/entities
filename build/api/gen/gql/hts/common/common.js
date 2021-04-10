"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityRequest_Status = exports.UserEvent_Status = exports.Permission = exports.Gender = exports.QuestionGroupType = exports.AnswerType = exports.DayOfWeek = exports.protobufPackage = void 0;
/* eslint-disable */
exports.protobufPackage = "hts.common";
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["DAY_OF_WEEK_UNSPECIFIED"] = 0] = "DAY_OF_WEEK_UNSPECIFIED";
    DayOfWeek[DayOfWeek["SUN"] = 1] = "SUN";
    DayOfWeek[DayOfWeek["MON"] = 2] = "MON";
    DayOfWeek[DayOfWeek["TUE"] = 3] = "TUE";
    DayOfWeek[DayOfWeek["WED"] = 4] = "WED";
    DayOfWeek[DayOfWeek["THU"] = 5] = "THU";
    DayOfWeek[DayOfWeek["FRI"] = 6] = "FRI";
    DayOfWeek[DayOfWeek["SAT"] = 7] = "SAT";
    DayOfWeek[DayOfWeek["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DayOfWeek = exports.DayOfWeek || (exports.DayOfWeek = {}));
var AnswerType;
(function (AnswerType) {
    AnswerType[AnswerType["ANSWER_TYPE_UNSPECIFIED"] = 0] = "ANSWER_TYPE_UNSPECIFIED";
    AnswerType[AnswerType["SCALE"] = 1] = "SCALE";
    AnswerType[AnswerType["TEXT"] = 2] = "TEXT";
    AnswerType[AnswerType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AnswerType = exports.AnswerType || (exports.AnswerType = {}));
var QuestionGroupType;
(function (QuestionGroupType) {
    QuestionGroupType[QuestionGroupType["QUESTION_GROUP_TYPE_UNSPECIFIED"] = 0] = "QUESTION_GROUP_TYPE_UNSPECIFIED";
    QuestionGroupType[QuestionGroupType["PRE_EVENT"] = 1] = "PRE_EVENT";
    QuestionGroupType[QuestionGroupType["POST_EVENT"] = 2] = "POST_EVENT";
    QuestionGroupType[QuestionGroupType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(QuestionGroupType = exports.QuestionGroupType || (exports.QuestionGroupType = {}));
var Gender;
(function (Gender) {
    Gender[Gender["GENDER_UNSPECIFIED"] = 0] = "GENDER_UNSPECIFIED";
    Gender[Gender["M"] = 1] = "M";
    Gender[Gender["F"] = 2] = "F";
    Gender[Gender["NS"] = 3] = "NS";
    Gender[Gender["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Gender = exports.Gender || (exports.Gender = {}));
var Permission;
(function (Permission) {
    Permission[Permission["PERMISSION_UNSPECIFIED"] = 0] = "PERMISSION_UNSPECIFIED";
    Permission[Permission["ORGANIZATION_UPDATE"] = 1] = "ORGANIZATION_UPDATE";
    Permission[Permission["ORGANIZATION_REMOVE"] = 2] = "ORGANIZATION_REMOVE";
    Permission[Permission["ORGANIZATION_MEMBER_ADD"] = 3] = "ORGANIZATION_MEMBER_ADD";
    Permission[Permission["ORGANIZATION_MEMBER_REMOVE"] = 4] = "ORGANIZATION_MEMBER_REMOVE";
    Permission[Permission["EVENT_CREATE"] = 5] = "EVENT_CREATE";
    Permission[Permission["EVENT_UPDATE"] = 6] = "EVENT_UPDATE";
    Permission[Permission["EVENT_REMOVE"] = 7] = "EVENT_REMOVE";
    Permission[Permission["TAG_CREATE"] = 8] = "TAG_CREATE";
    Permission[Permission["TAG_REMOVE"] = 9] = "TAG_REMOVE";
    Permission[Permission["EVENT_TAG_UPDATE"] = 10] = "EVENT_TAG_UPDATE";
    Permission[Permission["FACILITY_CREATE"] = 11] = "FACILITY_CREATE";
    Permission[Permission["FACILITY_UPDATE"] = 12] = "FACILITY_UPDATE";
    Permission[Permission["FACILITY_REMOVE"] = 13] = "FACILITY_REMOVE";
    Permission[Permission["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Permission = exports.Permission || (exports.Permission = {}));
var UserEvent_Status;
(function (UserEvent_Status) {
    UserEvent_Status[UserEvent_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    UserEvent_Status[UserEvent_Status["PENDING"] = 1] = "PENDING";
    UserEvent_Status[UserEvent_Status["APPROVED"] = 2] = "APPROVED";
    UserEvent_Status[UserEvent_Status["REJECTED"] = 3] = "REJECTED";
    UserEvent_Status[UserEvent_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserEvent_Status = exports.UserEvent_Status || (exports.UserEvent_Status = {}));
var FacilityRequest_Status;
(function (FacilityRequest_Status) {
    FacilityRequest_Status[FacilityRequest_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    FacilityRequest_Status[FacilityRequest_Status["PENDING"] = 1] = "PENDING";
    FacilityRequest_Status[FacilityRequest_Status["APPROVED"] = 2] = "APPROVED";
    FacilityRequest_Status[FacilityRequest_Status["REJECTED"] = 3] = "REJECTED";
    FacilityRequest_Status[FacilityRequest_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FacilityRequest_Status = exports.FacilityRequest_Status || (exports.FacilityRequest_Status = {}));
