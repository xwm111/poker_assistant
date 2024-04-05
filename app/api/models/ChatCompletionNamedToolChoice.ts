/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies a tool the model should use. Use to force the model to call a specific function.
 */
export type ChatCompletionNamedToolChoice = {
    /**
     * The type of the tool. Currently, only `function` is supported.
     */
    type: ChatCompletionNamedToolChoice.type;
    function: {
        /**
         * The name of the function to call.
         */
        name: string;
    };
};
export namespace ChatCompletionNamedToolChoice {
    /**
     * The type of the tool. Currently, only `function` is supported.
     */
    export enum type {
        FUNCTION = 'function',
    }
}

