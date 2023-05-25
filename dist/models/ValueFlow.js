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
exports.ValueFlowToJSON = exports.ValueFlowFromJSONTyped = exports.ValueFlowFromJSON = exports.instanceOfValueFlow = void 0;
const runtime_1 = require("../runtime");
const AccountAddress_1 = require("./AccountAddress");
const ValueFlowNftsInner_1 = require("./ValueFlowNftsInner");
/**
 * Check if a given object implements the ValueFlow interface.
 */
function instanceOfValueFlow(value) {
    let isInstance = true;
    isInstance = isInstance && "account" in value;
    isInstance = isInstance && "ton" in value;
    isInstance = isInstance && "fees" in value;
    return isInstance;
}
exports.instanceOfValueFlow = instanceOfValueFlow;
function ValueFlowFromJSON(json) {
    return ValueFlowFromJSONTyped(json, false);
}
exports.ValueFlowFromJSON = ValueFlowFromJSON;
function ValueFlowFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'account': (0, AccountAddress_1.AccountAddressFromJSON)(json['account']),
        'ton': json['ton'],
        'fees': json['fees'],
        'nfts': !(0, runtime_1.exists)(json, 'nfts') ? undefined : (json['nfts'].map(ValueFlowNftsInner_1.ValueFlowNftsInnerFromJSON)),
        'jettons': !(0, runtime_1.exists)(json, 'jettons') ? undefined : (json['jettons'].map(ValueFlowNftsInner_1.ValueFlowNftsInnerFromJSON)),
    };
}
exports.ValueFlowFromJSONTyped = ValueFlowFromJSONTyped;
function ValueFlowToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'account': (0, AccountAddress_1.AccountAddressToJSON)(value.account),
        'ton': value.ton,
        'fees': value.fees,
        'nfts': value.nfts === undefined ? undefined : (value.nfts.map(ValueFlowNftsInner_1.ValueFlowNftsInnerToJSON)),
        'jettons': value.jettons === undefined ? undefined : (value.jettons.map(ValueFlowNftsInner_1.ValueFlowNftsInnerToJSON)),
    };
}
exports.ValueFlowToJSON = ValueFlowToJSON;
