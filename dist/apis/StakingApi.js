"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakingApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class StakingApi extends runtime.BaseAPI {
    /**
     * All pools where account participates
     */
    poolsByNominatorsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling poolsByNominators.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/staking/nominator/{account_id}/pools`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AccountStakingFromJSON)(jsonValue));
        });
    }
    /**
     * All pools where account participates
     */
    poolsByNominators(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.poolsByNominatorsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Pool info
     */
    stakingPoolInfoRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling stakingPoolInfo.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/v2/staking/pool/{account_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.StakingPoolInfo200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Pool info
     */
    stakingPoolInfo(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.stakingPoolInfoRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * All pools available in network
     */
    stakingPoolsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.availableFor !== undefined) {
                queryParameters['available_for'] = requestParameters.availableFor;
            }
            if (requestParameters.includeUnverified !== undefined) {
                queryParameters['include_unverified'] = requestParameters.includeUnverified;
            }
            const headerParameters = {};
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/v2/staking/pools`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.StakingPools200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * All pools available in network
     */
    stakingPools(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.stakingPoolsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.StakingApi = StakingApi;
