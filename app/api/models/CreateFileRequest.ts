/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateFileRequest = {
    /**
     * The File object (not file name) to be uploaded.
     *
     */
    file: Blob;
    /**
     * The intended purpose of the uploaded file.
     *
     * Use "fine-tune" for [Fine-tuning](/docs/api-reference/fine-tuning) and "assistants" for [Assistants](/docs/api-reference/assistants) and [Messages](/docs/api-reference/messages). This allows us to validate the format of the uploaded file is correct for fine-tuning.
     *
     */
    purpose: CreateFileRequest.purpose;
};
export namespace CreateFileRequest {
    /**
     * The intended purpose of the uploaded file.
     *
     * Use "fine-tune" for [Fine-tuning](/docs/api-reference/fine-tuning) and "assistants" for [Assistants](/docs/api-reference/assistants) and [Messages](/docs/api-reference/messages). This allows us to validate the format of the uploaded file is correct for fine-tuning.
     *
     */
    export enum purpose {
        FINE_TUNE = 'fine-tune',
        ASSISTANTS = 'assistants',
    }
}

