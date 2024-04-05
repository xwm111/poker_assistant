/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCompletionRequest } from '../models/CreateCompletionRequest';
import type { CreateCompletionResponse } from '../models/CreateCompletionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompletionsService {
    /**
     * Creates a completion for the provided prompt and parameters.
     * @param requestBody
     * @returns CreateCompletionResponse OK
     * @throws ApiError
     */
    public static createCompletion(
        requestBody: CreateCompletionRequest,
    ): CancelablePromise<CreateCompletionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/completions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
