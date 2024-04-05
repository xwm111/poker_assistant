/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * References an image [File](/docs/api-reference/files) in the content of a message.
 */
export type MessageDeltaContentImageFileObject = {
    /**
     * The index of the content part in the message.
     */
    index: number;
    /**
     * Always `image_file`.
     */
    type: MessageDeltaContentImageFileObject.type;
    image_file?: {
        /**
         * The [File](/docs/api-reference/files) ID of the image in the message content.
         */
        file_id?: string;
    };
};
export namespace MessageDeltaContentImageFileObject {
    /**
     * Always `image_file`.
     */
    export enum type {
        IMAGE_FILE = 'image_file',
    }
}

