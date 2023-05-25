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
 */
export declare const AccountStatus: {
    readonly Nonexist: "nonexist";
    readonly Uninit: "uninit";
    readonly Active: "active";
    readonly Frozen: "frozen";
};
export declare type AccountStatus = typeof AccountStatus[keyof typeof AccountStatus];
export declare function AccountStatusFromJSON(json: any): AccountStatus;
export declare function AccountStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountStatus;
export declare function AccountStatusToJSON(value?: AccountStatus | null): any;
