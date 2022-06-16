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
 * @interface Block
 */
export interface Block {
    /**
     *
     * @type {number}
     * @memberof Block
     */
    endLt: number;
    /**
     *
     * @type {string}
     * @memberof Block
     */
    fileHash: string;
    /**
     *
     * @type {string}
     * @memberof Block
     */
    rootHash: string;
    /**
     *
     * @type {number}
     * @memberof Block
     */
    seqno: number;
    /**
     *
     * @type {number}
     * @memberof Block
     */
    shard: number;
    /**
     *
     * @type {number}
     * @memberof Block
     */
    startLt: number;
    /**
     *
     * @type {number}
     * @memberof Block
     */
    workchainId: number;
}
/**
 * Check if a given object implements the Block interface.
 */
export declare function instanceOfBlock(value: object): boolean;
export declare function BlockFromJSON(json: any): Block;
export declare function BlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): Block;
export declare function BlockToJSON(value?: Block | null): any;
