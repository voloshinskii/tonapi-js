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
exports.SubscriptionToJSON = exports.SubscriptionFromJSONTyped = exports.SubscriptionFromJSON = exports.instanceOfSubscription = void 0;
/**
 * Check if a given object implements the Subscription interface.
 */
function instanceOfSubscription(value) {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "walletAddress" in value;
    isInstance = isInstance && "beneficiaryAddress" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "period" in value;
    isInstance = isInstance && "startTime" in value;
    isInstance = isInstance && "timeout" in value;
    isInstance = isInstance && "lastPaymentTime" in value;
    isInstance = isInstance && "lastRequestTime" in value;
    isInstance = isInstance && "subscriptionId" in value;
    isInstance = isInstance && "failedAttempts" in value;
    return isInstance;
}
exports.instanceOfSubscription = instanceOfSubscription;
function SubscriptionFromJSON(json) {
    return SubscriptionFromJSONTyped(json, false);
}
exports.SubscriptionFromJSON = SubscriptionFromJSON;
function SubscriptionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'walletAddress': json['wallet_address'],
        'beneficiaryAddress': json['beneficiary_address'],
        'amount': json['amount'],
        'period': json['period'],
        'startTime': json['start_time'],
        'timeout': json['timeout'],
        'lastPaymentTime': json['last_payment_time'],
        'lastRequestTime': json['last_request_time'],
        'subscriptionId': json['subscription_id'],
        'failedAttempts': json['failed_attempts'],
    };
}
exports.SubscriptionFromJSONTyped = SubscriptionFromJSONTyped;
function SubscriptionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'wallet_address': value.walletAddress,
        'beneficiary_address': value.beneficiaryAddress,
        'amount': value.amount,
        'period': value.period,
        'start_time': value.startTime,
        'timeout': value.timeout,
        'last_payment_time': value.lastPaymentTime,
        'last_request_time': value.lastRequestTime,
        'subscription_id': value.subscriptionId,
        'failed_attempts': value.failedAttempts,
    };
}
exports.SubscriptionToJSON = SubscriptionToJSON;
