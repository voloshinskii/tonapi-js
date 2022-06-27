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

import { exists, mapValues } from '../runtime';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';

/**
 * 
 * @export
 * @interface TxAnnotation
 */
export interface TxAnnotation {
    /**
     * 
     * @type {AccountAddress}
     * @memberof TxAnnotation
     */
    address: AccountAddress;
    /**
     * annotation data struct
     * @type {any}
     * @memberof TxAnnotation
     */
    data: any | null;
    /**
     * 
     * @type {string}
     * @memberof TxAnnotation
     */
    name: string;
}

/**
 * Check if a given object implements the TxAnnotation interface.
 */
export function instanceOfTxAnnotation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function TxAnnotationFromJSON(json: any): TxAnnotation {
    return TxAnnotationFromJSONTyped(json, false);
}

export function TxAnnotationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TxAnnotation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': AccountAddressFromJSON(json['address']),
        'data': json['data'],
        'name': json['name'],
    };
}

export function TxAnnotationToJSON(value?: TxAnnotation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': AccountAddressToJSON(value.address),
        'data': value.data,
        'name': value.name,
    };
}

