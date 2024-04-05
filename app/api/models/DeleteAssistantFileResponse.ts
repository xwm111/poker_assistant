/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Deletes the association between the assistant and the file, but does not delete the [File](/docs/api-reference/files) object itself.
 */
export type DeleteAssistantFileResponse = {
    id: string;
    deleted: boolean;
    object: DeleteAssistantFileResponse.obj;
};
export namespace DeleteAssistantFileResponse {
    export enum obj {
        ASSISTANT_FILE_DELETED = 'assistant.file.deleted',
    }
}

