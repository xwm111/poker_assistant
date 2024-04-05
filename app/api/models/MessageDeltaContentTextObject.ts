/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageDeltaContentTextAnnotationsFileCitationObject } from './MessageDeltaContentTextAnnotationsFileCitationObject';
import type { MessageDeltaContentTextAnnotationsFilePathObject } from './MessageDeltaContentTextAnnotationsFilePathObject';
/**
 * The text content that is part of a message.
 */
export type MessageDeltaContentTextObject = {
    /**
     * The index of the content part in the message.
     */
    index: number;
    /**
     * Always `text`.
     */
    type: MessageDeltaContentTextObject.type;
    text?: {
        /**
         * The data that makes up the text.
         */
        value?: string;
        annotations?: Array<(MessageDeltaContentTextAnnotationsFileCitationObject | MessageDeltaContentTextAnnotationsFilePathObject)>;
    };
};
export namespace MessageDeltaContentTextObject {
    /**
     * Always `text`.
     */
    export enum type {
        TEXT = 'text',
    }
}

