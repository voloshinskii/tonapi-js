/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { ComputeSkipReason } from './ComputeSkipReason';
import {
    ComputeSkipReasonFromJSON,
    ComputeSkipReasonFromJSONTyped,
    ComputeSkipReasonToJSON,
} from './ComputeSkipReason';

/**
 * 
 * @export
 * @interface ComputePhase
 */
export interface ComputePhase {
    /**
     * 
     * @type {boolean}
     * @memberof ComputePhase
     */
    skipped: boolean;
    /**
     * 
     * @type {ComputeSkipReason}
     * @memberof ComputePhase
     */
    skipReason?: ComputeSkipReason;
    /**
     * 
     * @type {boolean}
     * @memberof ComputePhase
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ComputePhase
     */
    gasFees?: number;
    /**
     * 
     * @type {number}
     * @memberof ComputePhase
     */
    gasUsed?: number;
    /**
     * 
     * @type {number}
     * @memberof ComputePhase
     */
    vmSteps?: number;
    /**
     * 
     * @type {number}
     * @memberof ComputePhase
     */
    exitCode?: number;
}

/**
 * Check if a given object implements the ComputePhase interface.
 */
export function instanceOfComputePhase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "skipped" in value;

    return isInstance;
}

export function ComputePhaseFromJSON(json: any): ComputePhase {
    return ComputePhaseFromJSONTyped(json, false);
}

export function ComputePhaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComputePhase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'skipped': json['skipped'],
        'skipReason': !exists(json, 'skip_reason') ? undefined : ComputeSkipReasonFromJSON(json['skip_reason']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'gasFees': !exists(json, 'gas_fees') ? undefined : json['gas_fees'],
        'gasUsed': !exists(json, 'gas_used') ? undefined : json['gas_used'],
        'vmSteps': !exists(json, 'vm_steps') ? undefined : json['vm_steps'],
        'exitCode': !exists(json, 'exit_code') ? undefined : json['exit_code'],
    };
}

export function ComputePhaseToJSON(value?: ComputePhase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'skipped': value.skipped,
        'skip_reason': ComputeSkipReasonToJSON(value.skipReason),
        'success': value.success,
        'gas_fees': value.gasFees,
        'gas_used': value.gasUsed,
        'vm_steps': value.vmSteps,
        'exit_code': value.exitCode,
    };
}

