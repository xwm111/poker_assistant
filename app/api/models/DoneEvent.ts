/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Occurs when a stream ends.
 */
export type DoneEvent = {
    event: DoneEvent.event;
    data: DoneEvent.data;
};
export namespace DoneEvent {
    export enum event {
        DONE = 'done',
    }
    export enum data {
        _DONE_ = '[DONE]',
    }
}

