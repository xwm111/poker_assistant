/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateEmbeddingRequest } from '../models/CreateEmbeddingRequest';
import type { CreateEmbeddingResponse } from '../models/CreateEmbeddingResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EmbeddingsService {
    /**
     * Creates an embedding vector representing the input text.
     * @param requestBody
     * @returns CreateEmbeddingResponse OK
     * @throws ApiError
     */
    public static createEmbedding(
        requestBody: CreateEmbeddingRequest,
    ): CancelablePromise<CreateEmbeddingResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/embeddings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
