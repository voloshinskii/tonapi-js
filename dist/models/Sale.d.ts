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
import { AccountAddress } from './AccountAddress';
import { Price } from './Price';
/**
 *
 * @export
 * @interface Sale
 */
export interface Sale {
    /**
     *
     * @type {string}
     * @memberof Sale
     */
    address: string;
    /**
     *
     * @type {AccountAddress}
     * @memberof Sale
     */
    market: AccountAddress;
    /**
     *
     * @type {AccountAddress}
     * @memberof Sale
     */
    owner?: AccountAddress;
    /**
     *
     * @type {Price}
     * @memberof Sale
     */
    price: Price;
}
/**
 * Check if a given object implements the Sale interface.
 */
export declare function instanceOfSale(value: object): boolean;
export declare function SaleFromJSON(json: any): Sale;
export declare function SaleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Sale;
export declare function SaleToJSON(value?: Sale | null): any;
