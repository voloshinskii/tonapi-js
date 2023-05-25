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
exports.SendMessageRequestToJSON = exports.SendMessageRequestFromJSONTyped = exports.SendMessageRequestFromJSON = exports.instanceOfSendMessageRequest = void 0;
/**
 * Check if a given object implements the SendMessageRequest interface.
 */
function instanceOfSendMessageRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "boc" in value;
    return isInstance;
}
exports.instanceOfSendMessageRequest = instanceOfSendMessageRequest;
function SendMessageRequestFromJSON(json) {
    return SendMessageRequestFromJSONTyped(json, false);
}
exports.SendMessageRequestFromJSON = SendMessageRequestFromJSON;
function SendMessageRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'boc': json['boc'],
    };
}
exports.SendMessageRequestFromJSONTyped = SendMessageRequestFromJSONTyped;
function SendMessageRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'boc': value.boc,
    };
}
exports.SendMessageRequestToJSON = SendMessageRequestToJSON;
