/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateChatCompletionRequest } from '../models/CreateChatCompletionRequest';
import type { CreateChatCompletionResponse } from '../models/CreateChatCompletionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChatService {
    /**
     * Creates a model response for the given chat conversation.
     * @param requestBody
     * @returns CreateChatCompletionResponse OK
     * @throws ApiError
     */
    public static createChatCompletion(
        requestBody: CreateChatCompletionRequest,
    ): CancelablePromise<CreateChatCompletionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chat/completions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
