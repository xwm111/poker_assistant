/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssistantToolsCode } from './AssistantToolsCode';
import type { AssistantToolsFunction } from './AssistantToolsFunction';
import type { AssistantToolsRetrieval } from './AssistantToolsRetrieval';
import type { RunCompletionUsage } from './RunCompletionUsage';
import type { RunToolCallObject } from './RunToolCallObject';
/**
 * Represents an execution run on a [thread](/docs/api-reference/threads).
 */
export type RunObject = {
    /**
     * The identifier, which can be referenced in API endpoints.
     */
    id: string;
    /**
     * The object type, which is always `thread.run`.
     */
    object: RunObject.obj;
    /**
     * The Unix timestamp (in seconds) for when the run was created.
     */
    created_at: number;
    /**
     * The ID of the [thread](/docs/api-reference/threads) that was executed on as a part of this run.
     */
    thread_id: string;
    /**
     * The ID of the [assistant](/docs/api-reference/assistants) used for execution of this run.
     */
    assistant_id: string;
    /**
     * The status of the run, which can be either `queued`, `in_progress`, `requires_action`, `cancelling`, `cancelled`, `failed`, `completed`, or `expired`.
     */
    status: RunObject.status;
    /**
     * Details on the action required to continue the run. Will be `null` if no action is required.
     */
    required_action: {
        /**
         * For now, this is always `submit_tool_outputs`.
         */
        type: RunObject.type;
        /**
         * Details on the tool outputs needed for this run to continue.
         */
        submit_tool_outputs: {
            /**
             * A list of the relevant tool calls.
             */
            tool_calls: Array<RunToolCallObject>;
        };
    } | null;
    /**
     * The last error associated with this run. Will be `null` if there are no errors.
     */
    last_error: {
        /**
         * One of `server_error`, `rate_limit_exceeded`, or `invalid_prompt`.
         */
        code: RunObject.code;
        /**
         * A human-readable description of the error.
         */
        message: string;
    } | null;
    /**
     * The Unix timestamp (in seconds) for when the run will expire.
     */
    expires_at: number | null;
    /**
     * The Unix timestamp (in seconds) for when the run was started.
     */
    started_at: number | null;
    /**
     * The Unix timestamp (in seconds) for when the run was cancelled.
     */
    cancelled_at: number | null;
    /**
     * The Unix timestamp (in seconds) for when the run failed.
     */
    failed_at: number | null;
    /**
     * The Unix timestamp (in seconds) for when the run was completed.
     */
    completed_at: number | null;
    /**
     * The model that the [assistant](/docs/api-reference/assistants) used for this run.
     */
    model: string;
    /**
     * The instructions that the [assistant](/docs/api-reference/assistants) used for this run.
     */
    instructions: string;
    /**
     * The list of tools that the [assistant](/docs/api-reference/assistants) used for this run.
     */
    tools: Array<(AssistantToolsCode | AssistantToolsRetrieval | AssistantToolsFunction)>;
    /**
     * The list of [File](/docs/api-reference/files) IDs the [assistant](/docs/api-reference/assistants) used for this run.
     */
    file_ids: Array<string>;
    /**
     * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
     *
     */
    metadata: Record<string, any> | null;
    usage: RunCompletionUsage;
    /**
     * The sampling temperature used for this run. If not set, defaults to 1.
     */
    temperature?: number | null;
};
export namespace RunObject {
    /**
     * The object type, which is always `thread.run`.
     */
    export enum obj {
        THREAD_RUN = 'thread.run',
    }
    /**
     * The status of the run, which can be either `queued`, `in_progress`, `requires_action`, `cancelling`, `cancelled`, `failed`, `completed`, or `expired`.
     */
    export enum status {
        QUEUED = 'queued',
        IN_PROGRESS = 'in_progress',
        REQUIRES_ACTION = 'requires_action',
        CANCELLING = 'cancelling',
        CANCELLED = 'cancelled',
        FAILED = 'failed',
        COMPLETED = 'completed',
        EXPIRED = 'expired',
    }
    /**
     * For now, this is always `submit_tool_outputs`.
     */
    export enum type {
        SUBMIT_TOOL_OUTPUTS = 'submit_tool_outputs',
    }
    /**
     * One of `server_error`, `rate_limit_exceeded`, or `invalid_prompt`.
     */
    export enum code {
        SERVER_ERROR = 'server_error',
        RATE_LIMIT_EXCEEDED = 'rate_limit_exceeded',
        INVALID_PROMPT = 'invalid_prompt',
    }
}

