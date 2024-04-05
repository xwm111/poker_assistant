/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageDeltaContentImageFileObject } from './MessageDeltaContentImageFileObject';
import type { MessageDeltaContentTextObject } from './MessageDeltaContentTextObject';
/**
 * Represents a message delta i.e. any changed fields on a message during streaming.
 *
 */
export type MessageDeltaObject = {
    /**
     * The identifier of the message, which can be referenced in API endpoints.
     */
    id: string;
    /**
     * The object type, which is always `thread.message.delta`.
     */
    object: MessageDeltaObject.obj;
    /**
     * The delta containing the fields that have changed on the Message.
     */
    delta: {
        /**
         * The entity that produced the message. One of `user` or `assistant`.
         */
        role?: MessageDeltaObject.role;
        /**
         * The content of the message in array of text and/or images.
         */
        content?: Array<(MessageDeltaContentImageFileObject | MessageDeltaContentTextObject)>;
        /**
         * A list of [file](/docs/api-reference/files) IDs that the assistant should use. Useful for tools like retrieval and code_interpreter that can access files. A maximum of 10 files can be attached to a message.
         */
        file_ids?: Array<string>;
    };
};
export namespace MessageDeltaObject {
    /**
     * The object type, which is always `thread.message.delta`.
     */
    export enum obj {
        THREAD_MESSAGE_DELTA = 'thread.message.delta',
    }
    /**
     * The entity that produced the message. One of `user` or `assistant`.
     */
    export enum role {
        USER = 'user',
        ASSISTANT = 'assistant',
    }
}

