/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A list of [Files](/docs/api-reference/files) attached to an `assistant`.
 */
export type AssistantFileObject = {
    /**
     * The identifier, which can be referenced in API endpoints.
     */
    id: string;
    /**
     * The object type, which is always `assistant.file`.
     */
    object: AssistantFileObject.obj;
    /**
     * The Unix timestamp (in seconds) for when the assistant file was created.
     */
    created_at: number;
    /**
     * The assistant ID that the file is attached to.
     */
    assistant_id: string;
};
export namespace AssistantFileObject {
    /**
     * The object type, which is always `assistant.file`.
     */
    export enum obj {
        ASSISTANT_FILE = 'assistant.file',
    }
}

