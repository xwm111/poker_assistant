/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RunStepDetailsToolCallsCodeOutputImageObject = {
    /**
     * Always `image`.
     */
    type: RunStepDetailsToolCallsCodeOutputImageObject.type;
    image: {
        /**
         * The [file](/docs/api-reference/files) ID of the image.
         */
        file_id: string;
    };
};
export namespace RunStepDetailsToolCallsCodeOutputImageObject {
    /**
     * Always `image`.
     */
    export enum type {
        IMAGE = 'image',
    }
}

