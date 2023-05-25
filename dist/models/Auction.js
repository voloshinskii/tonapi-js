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
exports.AuctionToJSON = exports.AuctionFromJSONTyped = exports.AuctionFromJSON = exports.instanceOfAuction = void 0;
/**
 * Check if a given object implements the Auction interface.
 */
function instanceOfAuction(value) {
    let isInstance = true;
    isInstance = isInstance && "domain" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "bids" in value;
    isInstance = isInstance && "date" in value;
    return isInstance;
}
exports.instanceOfAuction = instanceOfAuction;
function AuctionFromJSON(json) {
    return AuctionFromJSONTyped(json, false);
}
exports.AuctionFromJSON = AuctionFromJSON;
function AuctionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'domain': json['domain'],
        'owner': json['owner'],
        'price': json['price'],
        'bids': json['bids'],
        'date': json['date'],
    };
}
exports.AuctionFromJSONTyped = AuctionFromJSONTyped;
function AuctionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'domain': value.domain,
        'owner': value.owner,
        'price': value.price,
        'bids': value.bids,
        'date': value.date,
    };
}
exports.AuctionToJSON = AuctionToJSON;
