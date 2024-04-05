/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ChatCompletionRequestMessageContentPartImage = {
    /**
     * The type of the content part.
     */
    type: ChatCompletionRequestMessageContentPartImage.type;
    image_url: {
        /**
         * Either a URL of the image or the base64 encoded image data.
         */
        url: string;
        /**
         * Specifies the detail level of the image. Learn more in the [Vision guide](/docs/guides/vision/low-or-high-fidelity-image-understanding).
         */
        detail?: ChatCompletionRequestMessageContentPartImage.detail;
    };
};
export namespace ChatCompletionRequestMessageContentPartImage {
    /**
     * The type of the content part.
     */
    export enum type {
        IMAGE_URL = 'image_url',
    }
    /**
     * Specifies the detail level of the image. Learn more in the [Vision guide](/docs/guides/vision/low-or-high-fidelity-image-understanding).
     */
    export enum detail {
        AUTO = 'auto',
        LOW = 'low',
        HIGH = 'high',
    }
}

