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
exports.AccountAddressToJSON = exports.AccountAddressFromJSONTyped = exports.AccountAddressFromJSON = exports.instanceOfAccountAddress = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AccountAddress interface.
 */
function instanceOfAccountAddress(value) {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    return isInstance;
}
exports.instanceOfAccountAddress = instanceOfAccountAddress;
function AccountAddressFromJSON(json) {
    return AccountAddressFromJSONTyped(json, false);
}
exports.AccountAddressFromJSON = AccountAddressFromJSON;
function AccountAddressFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'icon': !(0, runtime_1.exists)(json, 'icon') ? undefined : json['icon'],
        'isScam': !(0, runtime_1.exists)(json, 'isScam') ? undefined : json['isScam'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
    };
}
exports.AccountAddressFromJSONTyped = AccountAddressFromJSONTyped;
function AccountAddressToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'icon': value.icon,
        'isScam': value.isScam,
        'name': value.name,
    };
}
exports.AccountAddressToJSON = AccountAddressToJSON;
