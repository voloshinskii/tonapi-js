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
import type { Action } from './Action';
import type { Fee } from './Fee';
import type { ValueFlow } from './ValueFlow';
/**
 * An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
 * @export
 * @interface AccountEvent
 */
export interface AccountEvent {
    /**
     *
     * @type {string}
     * @memberof AccountEvent
     */
    eventId: string;
    /**
     *
     * @type {AccountAddress}
     * @memberof AccountEvent
     */
    account: AccountAddress;
    /**
     *
     * @type {number}
     * @memberof AccountEvent
     */
    timestamp: number;
    /**
     *
     * @type {Array<Action>}
     * @memberof AccountEvent
     */
    actions: Array<Action>;
    /**
     *
     * @type {Fee}
     * @memberof AccountEvent
     */
    fee: Fee;
    /**
     *
     * @type {ValueFlow}
     * @memberof AccountEvent
     */
    valueFlow: ValueFlow;
    /**
     * scam
     * @type {boolean}
     * @memberof AccountEvent
     */
    isScam: boolean;
    /**
     *
     * @type {number}
     * @memberof AccountEvent
     */
    lt: number;
    /**
     * Event is not finished yet. Transactions still happening
     * @type {boolean}
     * @memberof AccountEvent
     */
    inProgress: boolean;
}
/**
 * Check if a given object implements the AccountEvent interface.
 */
export declare function instanceOfAccountEvent(value: object): boolean;
export declare function AccountEventFromJSON(json: any): AccountEvent;
export declare function AccountEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountEvent;
export declare function AccountEventToJSON(value?: AccountEvent | null): any;
