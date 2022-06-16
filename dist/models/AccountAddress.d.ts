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
/**
 *
 * @export
 * @interface AccountAddress
 */
export interface AccountAddress {
    /**
     *
     * @type {string}
     * @memberof AccountAddress
     */
    address: string;
    /**
     *
     * @type {string}
     * @memberof AccountAddress
     */
    icon?: string;
    /**
     *
     * @type {boolean}
     * @memberof AccountAddress
     */
    isScam?: boolean;
    /**
     *
     * @type {string}
     * @memberof AccountAddress
     */
    name?: string;
}
/**
 * Check if a given object implements the AccountAddress interface.
 */
export declare function instanceOfAccountAddress(value: object): boolean;
export declare function AccountAddressFromJSON(json: any): AccountAddress;
export declare function AccountAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountAddress;
export declare function AccountAddressToJSON(value?: AccountAddress | null): any;
