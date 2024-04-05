/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateModerationRequest } from '../models/CreateModerationRequest';
import type { CreateModerationResponse } from '../models/CreateModerationResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ModerationsService {
    /**
     * Classifies if text is potentially harmful.
     * @param requestBody
     * @returns CreateModerationResponse OK
     * @throws ApiError
     */
    public static createModeration(
        requestBody: CreateModerationRequest,
    ): CancelablePromise<CreateModerationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/moderations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
