/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateImageEditRequest = {
    /**
     * The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask.
     */
    image: Blob;
    /**
     * A text description of the desired image(s). The maximum length is 1000 characters.
     */
    prompt: string;
    /**
     * An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where `image` should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as `image`.
     */
    mask?: Blob;
    /**
     * The model to use for image generation. Only `dall-e-2` is supported at this time.
     */
    model?: (string | 'dall-e-2') | null;
    /**
     * The number of images to generate. Must be between 1 and 10.
     */
    'n'?: number | null;
    /**
     * The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.
     */
    size?: CreateImageEditRequest.size | null;
    /**
     * The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated.
     */
    response_format?: CreateImageEditRequest.response_format | null;
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
     *
     */
    user?: string;
};
export namespace CreateImageEditRequest {
    /**
     * The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.
     */
    export enum size {
        _256X256 = '256x256',
        _512X512 = '512x512',
        _1024X1024 = '1024x1024',
    }
    /**
     * The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated.
     */
    export enum response_format {
        URL = 'url',
        B64_JSON = 'b64_json',
    }
}

