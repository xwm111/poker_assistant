/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RunStepDeltaStepDetailsToolCallsFunctionObject = {
    /**
     * The index of the tool call in the tool calls array.
     */
    index: number;
    /**
     * The ID of the tool call object.
     */
    id?: string;
    /**
     * The type of tool call. This is always going to be `function` for this type of tool call.
     */
    type: RunStepDeltaStepDetailsToolCallsFunctionObject.type;
    /**
     * The definition of the function that was called.
     */
    function?: {
        /**
         * The name of the function.
         */
        name?: string;
        /**
         * The arguments passed to the function.
         */
        arguments?: string;
        /**
         * The output of the function. This will be `null` if the outputs have not been [submitted](/docs/api-reference/runs/submitToolOutputs) yet.
         */
        output?: string | null;
    };
};
export namespace RunStepDeltaStepDetailsToolCallsFunctionObject {
    /**
     * The type of tool call. This is always going to be `function` for this type of tool call.
     */
    export enum type {
        FUNCTION = 'function',
    }
}

