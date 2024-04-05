/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from './Error';
/**
 * Occurs when an [error](/docs/guides/error-codes/api-errors) occurs. This can happen due to an internal server error or a timeout.
 */
export type ErrorEvent = {
    event: ErrorEvent.event;
    data: Error;
};
export namespace ErrorEvent {
    export enum event {
        ERROR = 'error',
    }
}

