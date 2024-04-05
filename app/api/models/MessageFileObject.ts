/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A list of files attached to a `message`.
 */
export type MessageFileObject = {
    /**
     * The identifier, which can be referenced in API endpoints.
     */
    id: string;
    /**
     * The object type, which is always `thread.message.file`.
     */
    object: MessageFileObject.obj;
    /**
     * The Unix timestamp (in seconds) for when the message file was created.
     */
    created_at: number;
    /**
     * The ID of the [message](/docs/api-reference/messages) that the [File](/docs/api-reference/files) is attached to.
     */
    message_id: string;
};
export namespace MessageFileObject {
    /**
     * The object type, which is always `thread.message.file`.
     */
    export enum obj {
        THREAD_MESSAGE_FILE = 'thread.message.file',
    }
}

