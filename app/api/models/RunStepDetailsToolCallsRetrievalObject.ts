/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RunStepDetailsToolCallsRetrievalObject = {
    /**
     * The ID of the tool call object.
     */
    id: string;
    /**
     * The type of tool call. This is always going to be `retrieval` for this type of tool call.
     */
    type: RunStepDetailsToolCallsRetrievalObject.type;
    /**
     * For now, this is always going to be an empty object.
     */
    retrieval: Record<string, any>;
};
export namespace RunStepDetailsToolCallsRetrievalObject {
    /**
     * The type of tool call. This is always going to be `retrieval` for this type of tool call.
     */
    export enum type {
        RETRIEVAL = 'retrieval',
    }
}

