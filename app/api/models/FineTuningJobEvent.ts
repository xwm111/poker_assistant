/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Fine-tuning job event object
 */
export type FineTuningJobEvent = {
    id: string;
    created_at: number;
    level: FineTuningJobEvent.level;
    message: string;
    object: FineTuningJobEvent.obj;
};
export namespace FineTuningJobEvent {
    export enum level {
        INFO = 'info',
        WARN = 'warn',
        ERROR = 'error',
    }
    export enum obj {
        FINE_TUNING_JOB_EVENT = 'fine_tuning.job.event',
    }
}

