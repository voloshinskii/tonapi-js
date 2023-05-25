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
exports.GetTonConnectPayload200ResponseToJSON = exports.GetTonConnectPayload200ResponseFromJSONTyped = exports.GetTonConnectPayload200ResponseFromJSON = exports.instanceOfGetTonConnectPayload200Response = void 0;
/**
 * Check if a given object implements the GetTonConnectPayload200Response interface.
 */
function instanceOfGetTonConnectPayload200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "payload" in value;
    return isInstance;
}
exports.instanceOfGetTonConnectPayload200Response = instanceOfGetTonConnectPayload200Response;
function GetTonConnectPayload200ResponseFromJSON(json) {
    return GetTonConnectPayload200ResponseFromJSONTyped(json, false);
}
exports.GetTonConnectPayload200ResponseFromJSON = GetTonConnectPayload200ResponseFromJSON;
function GetTonConnectPayload200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'payload': json['payload'],
    };
}
exports.GetTonConnectPayload200ResponseFromJSONTyped = GetTonConnectPayload200ResponseFromJSONTyped;
function GetTonConnectPayload200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'payload': value.payload,
    };
}
exports.GetTonConnectPayload200ResponseToJSON = GetTonConnectPayload200ResponseToJSON;
