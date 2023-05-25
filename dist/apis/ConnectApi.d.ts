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
import * as runtime from '../runtime';
import type { GetTonConnectPayload200Response, TonConnectProof200Response, TonConnectProofRequest } from '../models';
export interface TonConnectProofOperationRequest {
    tonConnectProofRequest: TonConnectProofRequest;
}
/**
 * ConnectApi - interface
 *
 * @export
 * @interface ConnectApiInterface
 */
export interface ConnectApiInterface {
    /**
     * Get a payload for further token receipt
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectApiInterface
     */
    getTonConnectPayloadRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetTonConnectPayload200Response>>;
    /**
     * Get a payload for further token receipt
     */
    getTonConnectPayload(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetTonConnectPayload200Response>;
    /**
     * Account verification and token issuance
     * @param {TonConnectProofRequest} tonConnectProofRequest Data that is expected from TON Connect
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectApiInterface
     */
    tonConnectProofRaw(requestParameters: TonConnectProofOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TonConnectProof200Response>>;
    /**
     * Account verification and token issuance
     */
    tonConnectProof(requestParameters: TonConnectProofOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TonConnectProof200Response>;
}
/**
 *
 */
export declare class ConnectApi extends runtime.BaseAPI implements ConnectApiInterface {
    /**
     * Get a payload for further token receipt
     */
    getTonConnectPayloadRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetTonConnectPayload200Response>>;
    /**
     * Get a payload for further token receipt
     */
    getTonConnectPayload(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetTonConnectPayload200Response>;
    /**
     * Account verification and token issuance
     */
    tonConnectProofRaw(requestParameters: TonConnectProofOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TonConnectProof200Response>>;
    /**
     * Account verification and token issuance
     */
    tonConnectProof(requestParameters: TonConnectProofOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TonConnectProof200Response>;
}
