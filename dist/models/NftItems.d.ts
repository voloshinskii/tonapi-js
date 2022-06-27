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
import type { NftItem } from './NftItem';
/**
 *
 * @export
 * @interface NftItems
 */
export interface NftItems {
    /**
     *
     * @type {Array<NftItem>}
     * @memberof NftItems
     */
    nftItems: Array<NftItem>;
}
/**
 * Check if a given object implements the NftItems interface.
 */
export declare function instanceOfNftItems(value: object): boolean;
export declare function NftItemsFromJSON(json: any): NftItems;
export declare function NftItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftItems;
export declare function NftItemsToJSON(value?: NftItems | null): any;
