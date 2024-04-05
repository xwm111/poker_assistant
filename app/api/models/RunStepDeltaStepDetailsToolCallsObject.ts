/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RunStepDeltaStepDetailsToolCallsCodeObject } from './RunStepDeltaStepDetailsToolCallsCodeObject';
import type { RunStepDeltaStepDetailsToolCallsFunctionObject } from './RunStepDeltaStepDetailsToolCallsFunctionObject';
import type { RunStepDeltaStepDetailsToolCallsRetrievalObject } from './RunStepDeltaStepDetailsToolCallsRetrievalObject';
/**
 * Details of the tool call.
 */
export type RunStepDeltaStepDetailsToolCallsObject = {
    /**
     * Always `tool_calls`.
     */
    type: RunStepDeltaStepDetailsToolCallsObject.type;
    /**
     * An array of tool calls the run step was involved in. These can be associated with one of three types of tools: `code_interpreter`, `retrieval`, or `function`.
     *
     */
    tool_calls?: Array<(RunStepDeltaStepDetailsToolCallsCodeObject | RunStepDeltaStepDetailsToolCallsRetrievalObject | RunStepDeltaStepDetailsToolCallsFunctionObject)>;
};
export namespace RunStepDeltaStepDetailsToolCallsObject {
    /**
     * Always `tool_calls`.
     */
    export enum type {
        TOOL_CALLS = 'tool_calls',
    }
}

