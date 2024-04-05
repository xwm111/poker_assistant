/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RunStepDeltaStepDetailsMessageCreationObject } from './RunStepDeltaStepDetailsMessageCreationObject';
import type { RunStepDeltaStepDetailsToolCallsObject } from './RunStepDeltaStepDetailsToolCallsObject';
/**
 * Represents a run step delta i.e. any changed fields on a run step during streaming.
 *
 */
export type RunStepDeltaObject = {
    /**
     * The identifier of the run step, which can be referenced in API endpoints.
     */
    id: string;
    /**
     * The object type, which is always `thread.run.step.delta`.
     */
    object: RunStepDeltaObject.obj;
    /**
     * The delta containing the fields that have changed on the run step.
     */
    delta: {
        /**
         * The details of the run step.
         */
        step_details?: (RunStepDeltaStepDetailsMessageCreationObject | RunStepDeltaStepDetailsToolCallsObject);
    };
};
export namespace RunStepDeltaObject {
    /**
     * The object type, which is always `thread.run.step.delta`.
     */
    export enum obj {
        THREAD_RUN_STEP_DELTA = 'thread.run.step.delta',
    }
}

