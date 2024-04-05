/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ThreadObject } from './ThreadObject';
export type ThreadStreamEvent = {
    event: ThreadStreamEvent.event;
    data: ThreadObject;
};
export namespace ThreadStreamEvent {
    export enum event {
        THREAD_CREATED = 'thread.created',
    }
}

