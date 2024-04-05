/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RunStepCompletionUsage } from './RunStepCompletionUsage';
import type { RunStepDetailsMessageCreationObject } from './RunStepDetailsMessageCreationObject';
import type { RunStepDetailsToolCallsObject } from './RunStepDetailsToolCallsObject';
/**
 * Represents a step in execution of a run.
 *
 */
export type RunStepObject = {
    /**
     * The identifier of the run step, which can be referenced in API endpoints.
     */
    id: string;
    /**
     * The object type, which is always `thread.run.step`.
     */
    object: RunStepObject.obj;
    /**
     * The Unix timestamp (in seconds) for when the run step was created.
     */
    created_at: number;
    /**
     * The ID of the [assistant](/docs/api-reference/assistants) associated with the run step.
     */
    assistant_id: string;
    /**
     * The ID of the [thread](/docs/api-reference/threads) that was run.
     */
    thread_id: string;
    /**
     * The ID of the [run](/docs/api-reference/runs) that this run step is a part of.
     */
    run_id: string;
    /**
     * The type of run step, which can be either `message_creation` or `tool_calls`.
     */
    type: RunStepObject.type;
    /**
     * The status of the run step, which can be either `in_progress`, `cancelled`, `failed`, `completed`, or `expired`.
     */
    status: RunStepObject.status;
    /**
     * The details of the run step.
     */
    step_details: (RunStepDetailsMessageCreationObject | RunStepDetailsToolCallsObject);
    /**
     * The last error associated with this run step. Will be `null` if there are no errors.
     */
    last_error: {
        /**
         * One of `server_error` or `rate_limit_exceeded`.
         */
        code: RunStepObject.code;
        /**
         * A human-readable description of the error.
         */
        message: string;
    } | null;
    /**
     * The Unix timestamp (in seconds) for when the run step expired. A step is considered expired if the parent run is expired.
     */
    expired_at: number | null;
    /**
     * The Unix timestamp (in seconds) for when the run step was cancelled.
     */
    cancelled_at: number | null;
    /**
     * The Unix timestamp (in seconds) for when the run step failed.
     */
    failed_at: number | null;
    /**
     * The Unix timestamp (in seconds) for when the run step completed.
     */
    completed_at: number | null;
    /**
     * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
     *
     */
    metadata: Record<string, any> | null;
    usage: RunStepCompletionUsage;
};
export namespace RunStepObject {
    /**
     * The object type, which is always `thread.run.step`.
     */
    export enum obj {
        THREAD_RUN_STEP = 'thread.run.step',
    }
    /**
     * The type of run step, which can be either `message_creation` or `tool_calls`.
     */
    export enum type {
        MESSAGE_CREATION = 'message_creation',
        TOOL_CALLS = 'tool_calls',
    }
    /**
     * The status of the run step, which can be either `in_progress`, `cancelled`, `failed`, `completed`, or `expired`.
     */
    export enum status {
        IN_PROGRESS = 'in_progress',
        CANCELLED = 'cancelled',
        FAILED = 'failed',
        COMPLETED = 'completed',
        EXPIRED = 'expired',
    }
    /**
     * One of `server_error` or `rate_limit_exceeded`.
     */
    export enum code {
        SERVER_ERROR = 'server_error',
        RATE_LIMIT_EXCEEDED = 'rate_limit_exceeded',
    }
}

