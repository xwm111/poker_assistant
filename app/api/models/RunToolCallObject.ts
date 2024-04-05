/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Tool call objects
 */
export type RunToolCallObject = {
    /**
     * The ID of the tool call. This ID must be referenced when you submit the tool outputs in using the [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs) endpoint.
     */
    id: string;
    /**
     * The type of tool call the output is required for. For now, this is always `function`.
     */
    type: RunToolCallObject.type;
    /**
     * The function definition.
     */
    function: {
        /**
         * The name of the function.
         */
        name: string;
        /**
         * The arguments that the model expects you to pass to the function.
         */
        arguments: string;
    };
};
export namespace RunToolCallObject {
    /**
     * The type of tool call the output is required for. For now, this is always `function`.
     */
    export enum type {
        FUNCTION = 'function',
    }
}

