/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageContentTextAnnotationsFileCitationObject } from './MessageContentTextAnnotationsFileCitationObject';
import type { MessageContentTextAnnotationsFilePathObject } from './MessageContentTextAnnotationsFilePathObject';
/**
 * The text content that is part of a message.
 */
export type MessageContentTextObject = {
    /**
     * Always `text`.
     */
    type: MessageContentTextObject.type;
    text: {
        /**
         * The data that makes up the text.
         */
        value: string;
        annotations: Array<(MessageContentTextAnnotationsFileCitationObject | MessageContentTextAnnotationsFilePathObject)>;
    };
};
export namespace MessageContentTextObject {
    /**
     * Always `text`.
     */
    export enum type {
        TEXT = 'text',
    }
}

