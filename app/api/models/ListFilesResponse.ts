/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OpenAIFile } from './OpenAIFile';
export type ListFilesResponse = {
    data: Array<OpenAIFile>;
    object: ListFilesResponse.obj;
};
export namespace ListFilesResponse {
    export enum obj {
        LIST = 'list',
    }
}

