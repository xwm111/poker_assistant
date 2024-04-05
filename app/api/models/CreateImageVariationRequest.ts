/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateImageVariationRequest = {
    /**
     * The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square.
     */
    image: Blob;
    /**
     * The model to use for image generation. Only `dall-e-2` is supported at this time.
     */
    model?: (string | 'dall-e-2') | null;
    /**
     * The number of images to generate. Must be between 1 and 10. For `dall-e-3`, only `n=1` is supported.
     */
    'n'?: number | null;
    /**
     * The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated.
     */
    response_format?: CreateImageVariationRequest.response_format | null;
    /**
     * The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.
     */
    size?: CreateImageVariationRequest.size | null;
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
     *
     */
    user?: string;
};
export namespace CreateImageVariationRequest {
    /**
     * The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated.
     */
    export enum response_format {
        URL = 'url',
        B64_JSON = 'b64_json',
    }
    /**
     * The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.
     */
    export enum size {
        _256X256 = '256x256',
        _512X512 = '512x512',
        _1024X1024 = '1024x1024',
    }
}

