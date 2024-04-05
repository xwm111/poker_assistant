/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * References an image [File](/docs/api-reference/files) in the content of a message.
 */
export type MessageContentImageFileObject = {
    /**
     * Always `image_file`.
     */
    type: MessageContentImageFileObject.type;
    image_file: {
        /**
         * The [File](/docs/api-reference/files) ID of the image in the message content.
         */
        file_id: string;
    };
};
export namespace MessageContentImageFileObject {
    /**
     * Always `image_file`.
     */
    export enum type {
        IMAGE_FILE = 'image_file',
    }
}

