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
exports.TonConnectProofRequestProofToJSON = exports.TonConnectProofRequestProofFromJSONTyped = exports.TonConnectProofRequestProofFromJSON = exports.instanceOfTonConnectProofRequestProof = void 0;
const runtime_1 = require("../runtime");
const TonConnectProofRequestProofDomain_1 = require("./TonConnectProofRequestProofDomain");
/**
 * Check if a given object implements the TonConnectProofRequestProof interface.
 */
function instanceOfTonConnectProofRequestProof(value) {
    let isInstance = true;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "domain" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "payload" in value;
    return isInstance;
}
exports.instanceOfTonConnectProofRequestProof = instanceOfTonConnectProofRequestProof;
function TonConnectProofRequestProofFromJSON(json) {
    return TonConnectProofRequestProofFromJSONTyped(json, false);
}
exports.TonConnectProofRequestProofFromJSON = TonConnectProofRequestProofFromJSON;
function TonConnectProofRequestProofFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'timestamp': json['timestamp'],
        'domain': (0, TonConnectProofRequestProofDomain_1.TonConnectProofRequestProofDomainFromJSON)(json['domain']),
        'signature': json['signature'],
        'payload': json['payload'],
        'stateInit': !(0, runtime_1.exists)(json, 'state_init') ? undefined : json['state_init'],
    };
}
exports.TonConnectProofRequestProofFromJSONTyped = TonConnectProofRequestProofFromJSONTyped;
function TonConnectProofRequestProofToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'timestamp': value.timestamp,
        'domain': (0, TonConnectProofRequestProofDomain_1.TonConnectProofRequestProofDomainToJSON)(value.domain),
        'signature': value.signature,
        'payload': value.payload,
        'state_init': value.stateInit,
    };
}
exports.TonConnectProofRequestProofToJSON = TonConnectProofRequestProofToJSON;
