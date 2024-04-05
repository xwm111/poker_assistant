/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the "retrieval" tool to search files.
 */
export type MessageDeltaContentTextAnnotationsFileCitationObject = {
    /**
     * The index of the annotation in the text content part.
     */
    index: number;
    /**
     * Always `file_citation`.
     */
    type: MessageDeltaContentTextAnnotationsFileCitationObject.type;
    /**
     * The text in the message content that needs to be replaced.
     */
    text?: string;
    file_citation?: {
        /**
         * The ID of the specific File the citation is from.
         */
        file_id?: string;
        /**
         * The specific quote in the file.
         */
        quote?: string;
    };
    start_index?: number;
    end_index?: number;
};
export namespace MessageDeltaContentTextAnnotationsFileCitationObject {
    /**
     * Always `file_citation`.
     */
    export enum type {
        FILE_CITATION = 'file_citation',
    }
}

