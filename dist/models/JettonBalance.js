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
exports.JettonBalanceToJSON = exports.JettonBalanceFromJSONTyped = exports.JettonBalanceFromJSON = exports.instanceOfJettonBalance = void 0;
const AccountAddress_1 = require("./AccountAddress");
const JettonPreview_1 = require("./JettonPreview");
/**
 * Check if a given object implements the JettonBalance interface.
 */
function instanceOfJettonBalance(value) {
    let isInstance = true;
    isInstance = isInstance && "balance" in value;
    isInstance = isInstance && "walletAddress" in value;
    isInstance = isInstance && "jetton" in value;
    return isInstance;
}
exports.instanceOfJettonBalance = instanceOfJettonBalance;
function JettonBalanceFromJSON(json) {
    return JettonBalanceFromJSONTyped(json, false);
}
exports.JettonBalanceFromJSON = JettonBalanceFromJSON;
function JettonBalanceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'balance': json['balance'],
        'walletAddress': (0, AccountAddress_1.AccountAddressFromJSON)(json['wallet_address']),
        'jetton': (0, JettonPreview_1.JettonPreviewFromJSON)(json['jetton']),
    };
}
exports.JettonBalanceFromJSONTyped = JettonBalanceFromJSONTyped;
function JettonBalanceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'balance': value.balance,
        'wallet_address': (0, AccountAddress_1.AccountAddressToJSON)(value.walletAddress),
        'jetton': (0, JettonPreview_1.JettonPreviewToJSON)(value.jetton),
    };
}
exports.JettonBalanceToJSON = JettonBalanceToJSON;
