/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RunStepDeltaStepDetailsToolCallsCodeOutputImageObject = {
    /**
     * The index of the output in the outputs array.
     */
    index: number;
    /**
     * Always `image`.
     */
    type: RunStepDeltaStepDetailsToolCallsCodeOutputImageObject.type;
    image?: {
        /**
         * The [file](/docs/api-reference/files) ID of the image.
         */
        file_id?: string;
    };
};
export namespace RunStepDeltaStepDetailsToolCallsCodeOutputImageObject {
    /**
     * Always `image`.
     */
    export enum type {
        IMAGE = 'image',
    }
}

