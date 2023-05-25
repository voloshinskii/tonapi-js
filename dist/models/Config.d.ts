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
 * @interface Config
 */
export interface Config {
    /**
     * config boc in base64 format
     * @type {string}
     * @memberof Config
     */
    boc: string;
}
/**
 * Check if a given object implements the Config interface.
 */
export declare function instanceOfConfig(value: object): boolean;
export declare function ConfigFromJSON(json: any): Config;
export declare function ConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): Config;
export declare function ConfigToJSON(value?: Config | null): any;
