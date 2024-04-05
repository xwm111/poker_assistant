/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Text output from the Code Interpreter tool call as part of a run step.
 */
export type RunStepDetailsToolCallsCodeOutputLogsObject = {
    /**
     * Always `logs`.
     */
    type: RunStepDetailsToolCallsCodeOutputLogsObject.type;
    /**
     * The text output from the Code Interpreter tool call.
     */
    logs: string;
};
export namespace RunStepDetailsToolCallsCodeOutputLogsObject {
    /**
     * Always `logs`.
     */
    export enum type {
        LOGS = 'logs',
    }
}

