/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Text output from the Code Interpreter tool call as part of a run step.
 */
export type RunStepDeltaStepDetailsToolCallsCodeOutputLogsObject = {
    /**
     * The index of the output in the outputs array.
     */
    index: number;
    /**
     * Always `logs`.
     */
    type: RunStepDeltaStepDetailsToolCallsCodeOutputLogsObject.type;
    /**
     * The text output from the Code Interpreter tool call.
     */
    logs?: string;
};
export namespace RunStepDeltaStepDetailsToolCallsCodeOutputLogsObject {
    /**
     * Always `logs`.
     */
    export enum type {
        LOGS = 'logs',
    }
}

