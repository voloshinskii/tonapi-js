"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceIdToJSON = exports.TraceIdFromJSONTyped = exports.TraceIdFromJSON = exports.instanceOfTraceId = void 0;
/**
 * Check if a given object implements the TraceId interface.
 */
function instanceOfTraceId(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "utime" in value;
    return isInstance;
}
exports.instanceOfTraceId = instanceOfTraceId;
function TraceIdFromJSON(json) {
    return TraceIdFromJSONTyped(json, false);
}
exports.TraceIdFromJSON = TraceIdFromJSON;
function TraceIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'utime': json['utime'],
    };
}
exports.TraceIdFromJSONTyped = TraceIdFromJSONTyped;
function TraceIdToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'utime': value.utime,
    };
}
exports.TraceIdToJSON = TraceIdToJSON;
