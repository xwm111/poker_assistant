/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a thread that contains [messages](/docs/api-reference/messages).
 */
export type ThreadObject = {
    /**
     * The identifier, which can be referenced in API endpoints.
     */
    id: string;
    /**
     * The object type, which is always `thread`.
     */
    object: ThreadObject.obj;
    /**
     * The Unix timestamp (in seconds) for when the thread was created.
     */
    created_at: number;
    /**
     * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
     *
     */
    metadata: Record<string, any> | null;
};
export namespace ThreadObject {
    /**
     * The object type, which is always `thread`.
     */
    export enum obj {
        THREAD = 'thread',
    }
}

