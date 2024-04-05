/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssistantToolsCode } from './AssistantToolsCode';
import type { AssistantToolsFunction } from './AssistantToolsFunction';
import type { AssistantToolsRetrieval } from './AssistantToolsRetrieval';
/**
 * Represents an `assistant` that can call the model and use tools.
 */
export type AssistantObject = {
    /**
     * The identifier, which can be referenced in API endpoints.
     */
    id: string;
    /**
     * The object type, which is always `assistant`.
     */
    object: AssistantObject.obj;
    /**
     * The Unix timestamp (in seconds) for when the assistant was created.
     */
    created_at: number;
    /**
     * The name of the assistant. The maximum length is 256 characters.
     *
     */
    name: string | null;
    /**
     * The description of the assistant. The maximum length is 512 characters.
     *
     */
    description: string | null;
    /**
     * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
     *
     */
    model: string;
    /**
     * The system instructions that the assistant uses. The maximum length is 32768 characters.
     *
     */
    instructions: string | null;
    /**
     * A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `retrieval`, or `function`.
     *
     */
    tools: Array<(AssistantToolsCode | AssistantToolsRetrieval | AssistantToolsFunction)>;
    /**
     * A list of [file](/docs/api-reference/files) IDs attached to this assistant. There can be a maximum of 20 files attached to the assistant. Files are ordered by their creation date in ascending order.
     *
     */
    file_ids: Array<string>;
    /**
     * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
     *
     */
    metadata: Record<string, any> | null;
};
export namespace AssistantObject {
    /**
     * The object type, which is always `assistant`.
     */
    export enum obj {
        ASSISTANT = 'assistant',
    }
}

