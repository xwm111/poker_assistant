/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A URL for the file that's generated when the assistant used the `code_interpreter` tool to generate a file.
 */
export type MessageContentTextAnnotationsFilePathObject = {
    /**
     * Always `file_path`.
     */
    type: MessageContentTextAnnotationsFilePathObject.type;
    /**
     * The text in the message content that needs to be replaced.
     */
    text: string;
    file_path: {
        /**
         * The ID of the file that was generated.
         */
        file_id: string;
    };
    start_index: number;
    end_index: number;
};
export namespace MessageContentTextAnnotationsFilePathObject {
    /**
     * Always `file_path`.
     */
    export enum type {
        FILE_PATH = 'file_path',
    }
}

