/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RunStepDetailsToolCallsCodeObject } from './RunStepDetailsToolCallsCodeObject';
import type { RunStepDetailsToolCallsFunctionObject } from './RunStepDetailsToolCallsFunctionObject';
import type { RunStepDetailsToolCallsRetrievalObject } from './RunStepDetailsToolCallsRetrievalObject';
/**
 * Details of the tool call.
 */
export type RunStepDetailsToolCallsObject = {
    /**
     * Always `tool_calls`.
     */
    type: RunStepDetailsToolCallsObject.type;
    /**
     * An array of tool calls the run step was involved in. These can be associated with one of three types of tools: `code_interpreter`, `retrieval`, or `function`.
     *
     */
    tool_calls: Array<(RunStepDetailsToolCallsCodeObject | RunStepDetailsToolCallsRetrievalObject | RunStepDetailsToolCallsFunctionObject)>;
};
export namespace RunStepDetailsToolCallsObject {
    /**
     * Always `tool_calls`.
     */
    export enum type {
        TOOL_CALLS = 'tool_calls',
    }
}

