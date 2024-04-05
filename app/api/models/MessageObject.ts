/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageContentImageFileObject } from './MessageContentImageFileObject';
import type { MessageContentTextObject } from './MessageContentTextObject';
/**
 * Represents a message within a [thread](/docs/api-reference/threads).
 */
export type MessageObject = {
    /**
     * The identifier, which can be referenced in API endpoints.
     */
    id: string;
    /**
     * The object type, which is always `thread.message`.
     */
    object: MessageObject.obj;
    /**
     * The Unix timestamp (in seconds) for when the message was created.
     */
    created_at: number;
    /**
     * The [thread](/docs/api-reference/threads) ID that this message belongs to.
     */
    thread_id: string;
    /**
     * The status of the message, which can be either `in_progress`, `incomplete`, or `completed`.
     */
    status: MessageObject.status;
    /**
     * On an incomplete message, details about why the message is incomplete.
     */
    incomplete_details: {
        /**
         * The reason the message is incomplete.
         */
        reason: MessageObject.reason;
    } | null;
    /**
     * The Unix timestamp (in seconds) for when the message was completed.
     */
    completed_at: number | null;
    /**
     * The Unix timestamp (in seconds) for when the message was marked as incomplete.
     */
    incomplete_at: number | null;
    /**
     * The entity that produced the message. One of `user` or `assistant`.
     */
    role: MessageObject.role;
    /**
     * The content of the message in array of text and/or images.
     */
    content: Array<(MessageContentImageFileObject | MessageContentTextObject)>;
    /**
     * If applicable, the ID of the [assistant](/docs/api-reference/assistants) that authored this message.
     */
    assistant_id: string | null;
    /**
     * The ID of the [run](/docs/api-reference/runs) associated with the creation of this message. Value is `null` when messages are created manually using the create message or create thread endpoints.
     */
    run_id: string | null;
    /**
     * A list of [file](/docs/api-reference/files) IDs that the assistant should use. Useful for tools like retrieval and code_interpreter that can access files. A maximum of 10 files can be attached to a message.
     */
    file_ids: Array<string>;
    /**
     * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
     *
     */
    metadata: Record<string, any> | null;
};
export namespace MessageObject {
    /**
     * The object type, which is always `thread.message`.
     */
    export enum obj {
        THREAD_MESSAGE = 'thread.message',
    }
    /**
     * The status of the message, which can be either `in_progress`, `incomplete`, or `completed`.
     */
    export enum status {
        IN_PROGRESS = 'in_progress',
        INCOMPLETE = 'incomplete',
        COMPLETED = 'completed',
    }
    /**
     * The reason the message is incomplete.
     */
    export enum reason {
        CONTENT_FILTER = 'content_filter',
        MAX_TOKENS = 'max_tokens',
        RUN_CANCELLED = 'run_cancelled',
        RUN_EXPIRED = 'run_expired',
        RUN_FAILED = 'run_failed',
    }
    /**
     * The entity that produced the message. One of `user` or `assistant`.
     */
    export enum role {
        USER = 'user',
        ASSISTANT = 'assistant',
    }
}

