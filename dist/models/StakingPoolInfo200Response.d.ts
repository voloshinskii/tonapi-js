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
import type { PoolImplementation } from './PoolImplementation';
import type { PoolInfo } from './PoolInfo';
/**
 *
 * @export
 * @interface StakingPoolInfo200Response
 */
export interface StakingPoolInfo200Response {
    /**
     *
     * @type {PoolImplementation}
     * @memberof StakingPoolInfo200Response
     */
    implementation: PoolImplementation;
    /**
     *
     * @type {PoolInfo}
     * @memberof StakingPoolInfo200Response
     */
    pool: PoolInfo;
}
/**
 * Check if a given object implements the StakingPoolInfo200Response interface.
 */
export declare function instanceOfStakingPoolInfo200Response(value: object): boolean;
export declare function StakingPoolInfo200ResponseFromJSON(json: any): StakingPoolInfo200Response;
export declare function StakingPoolInfo200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StakingPoolInfo200Response;
export declare function StakingPoolInfo200ResponseToJSON(value?: StakingPoolInfo200Response | null): any;
