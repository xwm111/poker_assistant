/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateMessageRequest } from './CreateMessageRequest';
export type CreateThreadRequest = {
    /**
     * A list of [messages](/docs/api-reference/messages) to start the thread with.
     */
    messages?: Array<CreateMessageRequest>;
    /**
     * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
     *
     */
    metadata?: Record<string, any> | null;
};

