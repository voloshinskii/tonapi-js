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
 * @interface SubscriptionAction
 */
export interface SubscriptionAction {
    /**
     *
     * @type {AccountAddress}
     * @memberof SubscriptionAction
     */
    subscriber: AccountAddress;
    /**
     *
     * @type {string}
     * @memberof SubscriptionAction
     */
    subscription: string;
    /**
     *
     * @type {AccountAddress}
     * @memberof SubscriptionAction
     */
    beneficiary: AccountAddress;
    /**
     *
     * @type {number}
     * @memberof SubscriptionAction
     */
    amount: number;
    /**
     *
     * @type {boolean}
     * @memberof SubscriptionAction
     */
    initial: boolean;
}
/**
 * Check if a given object implements the SubscriptionAction interface.
 */
export declare function instanceOfSubscriptionAction(value: object): boolean;
export declare function SubscriptionActionFromJSON(json: any): SubscriptionAction;
export declare function SubscriptionActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAction;
export declare function SubscriptionActionToJSON(value?: SubscriptionAction | null): any;
