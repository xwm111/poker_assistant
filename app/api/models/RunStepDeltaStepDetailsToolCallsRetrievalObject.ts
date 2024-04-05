/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RunStepDeltaStepDetailsToolCallsRetrievalObject = {
    /**
     * The index of the tool call in the tool calls array.
     */
    index: number;
    /**
     * The ID of the tool call object.
     */
    id?: string;
    /**
     * The type of tool call. This is always going to be `retrieval` for this type of tool call.
     */
    type: RunStepDeltaStepDetailsToolCallsRetrievalObject.type;
    /**
     * For now, this is always going to be an empty object.
     */
    retrieval?: Record<string, any>;
};
export namespace RunStepDeltaStepDetailsToolCallsRetrievalObject {
    /**
     * The type of tool call. This is always going to be `retrieval` for this type of tool call.
     */
    export enum type {
        RETRIEVAL = 'retrieval',
    }
}

