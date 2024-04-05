/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateImageEditRequest } from '../models/CreateImageEditRequest';
import type { CreateImageRequest } from '../models/CreateImageRequest';
import type { CreateImageVariationRequest } from '../models/CreateImageVariationRequest';
import type { ImagesResponse } from '../models/ImagesResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ImagesService {
    /**
     * Creates an image given a prompt.
     * @param requestBody
     * @returns ImagesResponse OK
     * @throws ApiError
     */
    public static createImage(
        requestBody: CreateImageRequest,
    ): CancelablePromise<ImagesResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/images/generations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Creates an edited or extended image given an original image and a prompt.
     * @param formData
     * @returns ImagesResponse OK
     * @throws ApiError
     */
    public static createImageEdit(
        formData: CreateImageEditRequest,
    ): CancelablePromise<ImagesResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/images/edits',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * Creates a variation of a given image.
     * @param formData
     * @returns ImagesResponse OK
     * @throws ApiError
     */
    public static createImageVariation(
        formData: CreateImageVariationRequest,
    ): CancelablePromise<ImagesResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/images/variations',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
