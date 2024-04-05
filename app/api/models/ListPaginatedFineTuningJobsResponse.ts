/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FineTuningJob } from './FineTuningJob';
export type ListPaginatedFineTuningJobsResponse = {
    data: Array<FineTuningJob>;
    has_more: boolean;
    object: ListPaginatedFineTuningJobsResponse.obj;
};
export namespace ListPaginatedFineTuningJobsResponse {
    export enum obj {
        LIST = 'list',
    }
}

