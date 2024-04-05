/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RunStepDeltaObject } from './RunStepDeltaObject';
import type { RunStepObject } from './RunStepObject';
export type RunStepStreamEvent = ({
    event: RunStepStreamEvent.event;
    data: RunStepObject;
} | {
    event: RunStepStreamEvent.event;
    data: RunStepDeltaObject;
});
export namespace RunStepStreamEvent {
    export enum event {
        THREAD_RUN_STEP_CREATED = 'thread.run.step.created',
    }
}

