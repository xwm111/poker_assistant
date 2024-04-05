/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FunctionObject } from './FunctionObject';
export type AssistantToolsFunction = {
    /**
     * The type of tool being defined: `function`
     */
    type: AssistantToolsFunction.type;
    function: FunctionObject;
};
export namespace AssistantToolsFunction {
    /**
     * The type of tool being defined: `function`
     */
    export enum type {
        FUNCTION = 'function',
    }
}

