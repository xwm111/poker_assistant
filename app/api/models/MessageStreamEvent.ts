/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageDeltaObject } from './MessageDeltaObject';
import type { MessageObject } from './MessageObject';
export type MessageStreamEvent = ({
    event: MessageStreamEvent.event;
    data: MessageObject;
} | {
    event: MessageStreamEvent.event;
    data: MessageDeltaObject;
});
export namespace MessageStreamEvent {
    export enum event {
        THREAD_MESSAGE_CREATED = 'thread.message.created',
    }
}

