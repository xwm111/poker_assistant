/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RunStepDetailsToolCallsFunctionObject = {
    /**
     * The ID of the tool call object.
     */
    id: string;
    /**
     * The type of tool call. This is always going to be `function` for this type of tool call.
     */
    type: RunStepDetailsToolCallsFunctionObject.type;
    /**
     * The definition of the function that was called.
     */
    function: {
        /**
         * The name of the function.
         */
        name: string;
        /**
         * The arguments passed to the function.
         */
        arguments: string;
        /**
         * The output of the function. This will be `null` if the outputs have not been [submitted](/docs/api-reference/runs/submitToolOutputs) yet.
         */
        output: string | null;
    };
};
export namespace RunStepDetailsToolCallsFunctionObject {
    /**
     * The type of tool call. This is always going to be `function` for this type of tool call.
     */
    export enum type {
        FUNCTION = 'function',
    }
}

