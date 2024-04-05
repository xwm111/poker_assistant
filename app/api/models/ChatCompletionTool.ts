/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FunctionObject } from './FunctionObject';
export type ChatCompletionTool = {
    /**
     * The type of the tool. Currently, only `function` is supported.
     */
    type: ChatCompletionTool.type;
    function: FunctionObject;
};
export namespace ChatCompletionTool {
    /**
     * The type of the tool. Currently, only `function` is supported.
     */
    export enum type {
        FUNCTION = 'function',
    }
}

