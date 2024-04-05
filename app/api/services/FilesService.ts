/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFileRequest } from '../models/CreateFileRequest';
import type { DeleteFileResponse } from '../models/DeleteFileResponse';
import type { ListFilesResponse } from '../models/ListFilesResponse';
import type { OpenAIFile } from '../models/OpenAIFile';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FilesService {
    /**
     * Returns a list of files that belong to the user's organization.
     * @param purpose Only return files with the given purpose.
     * @returns ListFilesResponse OK
     * @throws ApiError
     */
    public static listFiles(
        purpose?: string,
    ): CancelablePromise<ListFilesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files',
            query: {
                'purpose': purpose,
            },
        });
    }
    /**
     * Upload a file that can be used across various endpoints. The size of all the files uploaded by one organization can be up to 100 GB.
     *
     * The size of individual files can be a maximum of 512 MB or 2 million tokens for Assistants. See the [Assistants Tools guide](/docs/assistants/tools) to learn more about the types of files supported. The Fine-tuning API only supports `.jsonl` files.
     *
     * Please [contact us](https://help.openai.com/) if you need to increase these storage limits.
     *
     * @param formData
     * @returns OpenAIFile OK
     * @throws ApiError
     */
    public static createFile(
        formData: CreateFileRequest,
    ): CancelablePromise<OpenAIFile> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/files',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * Delete a file.
     * @param fileId The ID of the file to use for this request.
     * @returns DeleteFileResponse OK
     * @throws ApiError
     */
    public static deleteFile(
        fileId: string,
    ): CancelablePromise<DeleteFileResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/files/{file_id}',
            path: {
                'file_id': fileId,
            },
        });
    }
    /**
     * Returns information about a specific file.
     * @param fileId The ID of the file to use for this request.
     * @returns OpenAIFile OK
     * @throws ApiError
     */
    public static retrieveFile(
        fileId: string,
    ): CancelablePromise<OpenAIFile> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files/{file_id}',
            path: {
                'file_id': fileId,
            },
        });
    }
    /**
     * Returns the contents of the specified file.
     * @param fileId The ID of the file to use for this request.
     * @returns string OK
     * @throws ApiError
     */
    public static downloadFile(
        fileId: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files/{file_id}/content',
            path: {
                'file_id': fileId,
            },
        });
    }
}
