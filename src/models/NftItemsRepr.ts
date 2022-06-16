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
import {
    NftItemRepr,
    NftItemReprFromJSON,
    NftItemReprFromJSONTyped,
    NftItemReprToJSON,
} from './NftItemRepr';

/**
 * 
 * @export
 * @interface NftItemsRepr
 */
export interface NftItemsRepr {
    /**
     * 
     * @type {Array<NftItemRepr>}
     * @memberof NftItemsRepr
     */
    nftItems: Array<NftItemRepr>;
}

/**
 * Check if a given object implements the NftItemsRepr interface.
 */
export function instanceOfNftItemsRepr(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "nftItems" in value;

    return isInstance;
}

export function NftItemsReprFromJSON(json: any): NftItemsRepr {
    return NftItemsReprFromJSONTyped(json, false);
}

export function NftItemsReprFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftItemsRepr {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nftItems': ((json['nft_items'] as Array<any>).map(NftItemReprFromJSON)),
    };
}

export function NftItemsReprToJSON(value?: NftItemsRepr | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nft_items': ((value.nftItems as Array<any>).map(NftItemReprToJSON)),
    };
}

