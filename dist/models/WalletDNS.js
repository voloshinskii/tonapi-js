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
exports.WalletDNSToJSON = exports.WalletDNSFromJSONTyped = exports.WalletDNSFromJSON = exports.instanceOfWalletDNS = void 0;
/**
 * Check if a given object implements the WalletDNS interface.
 */
function instanceOfWalletDNS(value) {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "isWallet" in value;
    isInstance = isInstance && "hasMethodPubkey" in value;
    isInstance = isInstance && "hasMethodSeqno" in value;
    isInstance = isInstance && "names" in value;
    return isInstance;
}
exports.instanceOfWalletDNS = instanceOfWalletDNS;
function WalletDNSFromJSON(json) {
    return WalletDNSFromJSONTyped(json, false);
}
exports.WalletDNSFromJSON = WalletDNSFromJSON;
function WalletDNSFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'isWallet': json['is_wallet'],
        'hasMethodPubkey': json['has_method_pubkey'],
        'hasMethodSeqno': json['has_method_seqno'],
        'names': json['names'],
    };
}
exports.WalletDNSFromJSONTyped = WalletDNSFromJSONTyped;
function WalletDNSToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'is_wallet': value.isWallet,
        'has_method_pubkey': value.hasMethodPubkey,
        'has_method_seqno': value.hasMethodSeqno,
        'names': value.names,
    };
}
exports.WalletDNSToJSON = WalletDNSToJSON;
