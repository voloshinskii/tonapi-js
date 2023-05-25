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
import type { AccountAddress } from './AccountAddress';
/**
 *
 * @export
 * @interface Fee
 */
export interface Fee {
    /**
     *
     * @type {AccountAddress}
     * @memberof Fee
     */
    account: AccountAddress;
    /**
     * gas + rent + deposit - refund
     * @type {number}
     * @memberof Fee
     */
    total: number;
    /**
     *
     * @type {number}
     * @memberof Fee
     */
    gas: number;
    /**
     *
     * @type {number}
     * @memberof Fee
     */
    rent: number;
    /**
     *
     * @type {number}
     * @memberof Fee
     */
    deposit: number;
    /**
     *
     * @type {number}
     * @memberof Fee
     */
    refund: number;
}
/**
 * Check if a given object implements the Fee interface.
 */
export declare function instanceOfFee(value: object): boolean;
export declare function FeeFromJSON(json: any): Fee;
export declare function FeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Fee;
export declare function FeeToJSON(value?: Fee | null): any;
