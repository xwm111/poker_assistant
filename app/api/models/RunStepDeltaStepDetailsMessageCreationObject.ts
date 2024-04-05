/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Details of the message creation by the run step.
 */
export type RunStepDeltaStepDetailsMessageCreationObject = {
    /**
     * Always `message_creation`.
     */
    type: RunStepDeltaStepDetailsMessageCreationObject.type;
    message_creation?: {
        /**
         * The ID of the message that was created by this run step.
         */
        message_id?: string;
    };
};
export namespace RunStepDeltaStepDetailsMessageCreationObject {
    /**
     * Always `message_creation`.
     */
    export enum type {
        MESSAGE_CREATION = 'message_creation',
    }
}

