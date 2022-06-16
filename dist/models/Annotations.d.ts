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
import { Annotation } from './Annotation';
/**
 *
 * @export
 * @interface Annotations
 */
export interface Annotations {
    /**
     *
     * @type {Array<Annotation>}
     * @memberof Annotations
     */
    annotations: Array<Annotation>;
}
/**
 * Check if a given object implements the Annotations interface.
 */
export declare function instanceOfAnnotations(value: object): boolean;
export declare function AnnotationsFromJSON(json: any): Annotations;
export declare function AnnotationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Annotations;
export declare function AnnotationsToJSON(value?: Annotations | null): any;
