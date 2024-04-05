/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFineTuningJobRequest } from '../models/CreateFineTuningJobRequest';
import type { FineTuningJob } from '../models/FineTuningJob';
import type { ListFineTuningJobEventsResponse } from '../models/ListFineTuningJobEventsResponse';
import type { ListPaginatedFineTuningJobsResponse } from '../models/ListPaginatedFineTuningJobsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FineTuningService {
    /**
     * Creates a fine-tuning job which begins the process of creating a new model from a given dataset.
     *
     * Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.
     *
     * [Learn more about fine-tuning](/docs/guides/fine-tuning)
     *
     * @param requestBody
     * @returns FineTuningJob OK
     * @throws ApiError
     */
    public static createFineTuningJob(
        requestBody: CreateFineTuningJobRequest,
    ): CancelablePromise<FineTuningJob> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fine_tuning/jobs',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List your organization's fine-tuning jobs
     *
     * @param after Identifier for the last job from the previous pagination request.
     * @param limit Number of fine-tuning jobs to retrieve.
     * @returns ListPaginatedFineTuningJobsResponse OK
     * @throws ApiError
     */
    public static listPaginatedFineTuningJobs(
        after?: string,
        limit: number = 20,
    ): CancelablePromise<ListPaginatedFineTuningJobsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fine_tuning/jobs',
            query: {
                'after': after,
                'limit': limit,
            },
        });
    }
    /**
     * Get info about a fine-tuning job.
     *
     * [Learn more about fine-tuning](/docs/guides/fine-tuning)
     *
     * @param fineTuningJobId The ID of the fine-tuning job.
     *
     * @returns FineTuningJob OK
     * @throws ApiError
     */
    public static retrieveFineTuningJob(
        fineTuningJobId: string,
    ): CancelablePromise<FineTuningJob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fine_tuning/jobs/{fine_tuning_job_id}',
            path: {
                'fine_tuning_job_id': fineTuningJobId,
            },
        });
    }
    /**
     * Get status updates for a fine-tuning job.
     *
     * @param fineTuningJobId The ID of the fine-tuning job to get events for.
     *
     * @param after Identifier for the last event from the previous pagination request.
     * @param limit Number of events to retrieve.
     * @returns ListFineTuningJobEventsResponse OK
     * @throws ApiError
     */
    public static listFineTuningEvents(
        fineTuningJobId: string,
        after?: string,
        limit: number = 20,
    ): CancelablePromise<ListFineTuningJobEventsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fine_tuning/jobs/{fine_tuning_job_id}/events',
            path: {
                'fine_tuning_job_id': fineTuningJobId,
            },
            query: {
                'after': after,
                'limit': limit,
            },
        });
    }
    /**
     * Immediately cancel a fine-tune job.
     *
     * @param fineTuningJobId The ID of the fine-tuning job to cancel.
     *
     * @returns FineTuningJob OK
     * @throws ApiError
     */
    public static cancelFineTuningJob(
        fineTuningJobId: string,
    ): CancelablePromise<FineTuningJob> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fine_tuning/jobs/{fine_tuning_job_id}/cancel',
            path: {
                'fine_tuning_job_id': fineTuningJobId,
            },
        });
    }
}
