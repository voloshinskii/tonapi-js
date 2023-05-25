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
exports.StakingPools200ResponseToJSON = exports.StakingPools200ResponseFromJSONTyped = exports.StakingPools200ResponseFromJSON = exports.instanceOfStakingPools200Response = void 0;
const runtime_1 = require("../runtime");
const PoolImplementation_1 = require("./PoolImplementation");
const PoolInfo_1 = require("./PoolInfo");
/**
 * Check if a given object implements the StakingPools200Response interface.
 */
function instanceOfStakingPools200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "pools" in value;
    isInstance = isInstance && "implementations" in value;
    return isInstance;
}
exports.instanceOfStakingPools200Response = instanceOfStakingPools200Response;
function StakingPools200ResponseFromJSON(json) {
    return StakingPools200ResponseFromJSONTyped(json, false);
}
exports.StakingPools200ResponseFromJSON = StakingPools200ResponseFromJSON;
function StakingPools200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pools': (json['pools'].map(PoolInfo_1.PoolInfoFromJSON)),
        'implementations': ((0, runtime_1.mapValues)(json['implementations'], PoolImplementation_1.PoolImplementationFromJSON)),
    };
}
exports.StakingPools200ResponseFromJSONTyped = StakingPools200ResponseFromJSONTyped;
function StakingPools200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'pools': (value.pools.map(PoolInfo_1.PoolInfoToJSON)),
        'implementations': ((0, runtime_1.mapValues)(value.implementations, PoolImplementation_1.PoolImplementationToJSON)),
    };
}
exports.StakingPools200ResponseToJSON = StakingPools200ResponseToJSON;
