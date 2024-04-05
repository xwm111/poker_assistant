/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteModelResponse } from '../models/DeleteModelResponse';
import type { ListModelsResponse } from '../models/ListModelsResponse';
import type { Model } from '../models/Model';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ModelsService {
    /**
     * Lists the currently available models, and provides basic information about each one such as the owner and availability.
     * @returns ListModelsResponse OK
     * @throws ApiError
     */
    public static listModels(): CancelablePromise<ListModelsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/models',
        });
    }
    /**
     * Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
     * @param model The ID of the model to use for this request
     * @returns Model OK
     * @throws ApiError
     */
    public static retrieveModel(
        model: string,
    ): CancelablePromise<Model> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/models/{model}',
            path: {
                'model': model,
            },
        });
    }
    /**
     * Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.
     * @param model The model to delete
     * @returns DeleteModelResponse OK
     * @throws ApiError
     */
    public static deleteModel(
        model: string,
    ): CancelablePromise<DeleteModelResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/models/{model}',
            path: {
                'model': model,
            },
        });
    }
}
