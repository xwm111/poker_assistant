/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RunObject } from './RunObject';
export type RunStreamEvent = {
    event: RunStreamEvent.event;
    data: RunObject;
};
export namespace RunStreamEvent {
    export enum event {
        THREAD_RUN_CREATED = 'thread.run.created',
    }
}

