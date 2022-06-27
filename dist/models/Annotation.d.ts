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
 * @interface Annotation
 */
export interface Annotation {
    /**
     *
     * @type {AccountAddress}
     * @memberof Annotation
     */
    address: AccountAddress;
    /**
     * annotation data struct
     * @type {any}
     * @memberof Annotation
     */
    data: any | null;
    /**
     *
     * @type {string}
     * @memberof Annotation
     */
    hash: string;
    /**
     *
     * @type {string}
     * @memberof Annotation
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof Annotation
     */
    traceId?: string;
    /**
     *
     * @type {number}
     * @memberof Annotation
     */
    utime: number;
}
/**
 * Check if a given object implements the Annotation interface.
 */
export declare function instanceOfAnnotation(value: object): boolean;
export declare function AnnotationFromJSON(json: any): Annotation;
export declare function AnnotationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Annotation;
export declare function AnnotationToJSON(value?: Annotation | null): any;
