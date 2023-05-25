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
exports.GetBlock401ResponseToJSON = exports.GetBlock401ResponseFromJSONTyped = exports.GetBlock401ResponseFromJSON = exports.instanceOfGetBlock401Response = void 0;
/**
 * Check if a given object implements the GetBlock401Response interface.
 */
function instanceOfGetBlock401Response(value) {
    let isInstance = true;
    isInstance = isInstance && "error" in value;
    return isInstance;
}
exports.instanceOfGetBlock401Response = instanceOfGetBlock401Response;
function GetBlock401ResponseFromJSON(json) {
    return GetBlock401ResponseFromJSONTyped(json, false);
}
exports.GetBlock401ResponseFromJSON = GetBlock401ResponseFromJSON;
function GetBlock401ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': json['error'],
    };
}
exports.GetBlock401ResponseFromJSONTyped = GetBlock401ResponseFromJSONTyped;
function GetBlock401ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'error': value.error,
    };
}
exports.GetBlock401ResponseToJSON = GetBlock401ResponseToJSON;
