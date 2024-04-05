/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Usage statistics related to the run step. This value will be `null` while the run step's status is `in_progress`.
 */
export type RunStepCompletionUsage = {
    /**
     * Number of completion tokens used over the course of the run step.
     */
    completion_tokens: number;
    /**
     * Number of prompt tokens used over the course of the run step.
     */
    prompt_tokens: number;
    /**
     * Total number of tokens used (prompt + completion).
     */
    total_tokens: number;
};

