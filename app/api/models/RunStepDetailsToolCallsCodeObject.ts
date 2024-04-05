/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RunStepDetailsToolCallsCodeOutputImageObject } from './RunStepDetailsToolCallsCodeOutputImageObject';
import type { RunStepDetailsToolCallsCodeOutputLogsObject } from './RunStepDetailsToolCallsCodeOutputLogsObject';
/**
 * Details of the Code Interpreter tool call the run step was involved in.
 */
export type RunStepDetailsToolCallsCodeObject = {
    /**
     * The ID of the tool call.
     */
    id: string;
    /**
     * The type of tool call. This is always going to be `code_interpreter` for this type of tool call.
     */
    type: RunStepDetailsToolCallsCodeObject.type;
    /**
     * The Code Interpreter tool call definition.
     */
    code_interpreter: {
        /**
         * The input to the Code Interpreter tool call.
         */
        input: string;
        /**
         * The outputs from the Code Interpreter tool call. Code Interpreter can output one or more items, including text (`logs`) or images (`image`). Each of these are represented by a different object type.
         */
        outputs: Array<(RunStepDetailsToolCallsCodeOutputLogsObject | RunStepDetailsToolCallsCodeOutputImageObject)>;
    };
};
export namespace RunStepDetailsToolCallsCodeObject {
    /**
     * The type of tool call. This is always going to be `code_interpreter` for this type of tool call.
     */
    export enum type {
        CODE_INTERPRETER = 'code_interpreter',
    }
}

