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
exports.AccountStakingToJSON = exports.AccountStakingFromJSONTyped = exports.AccountStakingFromJSON = exports.instanceOfAccountStaking = void 0;
const AccountStakingInfo_1 = require("./AccountStakingInfo");
/**
 * Check if a given object implements the AccountStaking interface.
 */
function instanceOfAccountStaking(value) {
    let isInstance = true;
    isInstance = isInstance && "pools" in value;
    return isInstance;
}
exports.instanceOfAccountStaking = instanceOfAccountStaking;
function AccountStakingFromJSON(json) {
    return AccountStakingFromJSONTyped(json, false);
}
exports.AccountStakingFromJSON = AccountStakingFromJSON;
function AccountStakingFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pools': (json['pools'].map(AccountStakingInfo_1.AccountStakingInfoFromJSON)),
    };
}
exports.AccountStakingFromJSONTyped = AccountStakingFromJSONTyped;
function AccountStakingToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'pools': (value.pools.map(AccountStakingInfo_1.AccountStakingInfoToJSON)),
    };
}
exports.AccountStakingToJSON = AccountStakingToJSON;
