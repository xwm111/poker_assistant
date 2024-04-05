/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSpeechRequest } from '../models/CreateSpeechRequest';
import type { CreateTranscriptionRequest } from '../models/CreateTranscriptionRequest';
import type { CreateTranscriptionResponseJson } from '../models/CreateTranscriptionResponseJson';
import type { CreateTranscriptionResponseVerboseJson } from '../models/CreateTranscriptionResponseVerboseJson';
import type { CreateTranslationRequest } from '../models/CreateTranslationRequest';
import type { CreateTranslationResponseJson } from '../models/CreateTranslationResponseJson';
import type { CreateTranslationResponseVerboseJson } from '../models/CreateTranslationResponseVerboseJson';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AudioService {
    /**
     * Generates audio from the input text.
     * @param requestBody
     * @returns binary OK
     * @throws ApiError
     */
    public static createSpeech(
        requestBody: CreateSpeechRequest,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/audio/speech',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Transcribes audio into the input language.
     * @param formData
     * @returns any OK
     * @throws ApiError
     */
    public static createTranscription(
        formData: CreateTranscriptionRequest,
    ): CancelablePromise<(CreateTranscriptionResponseJson | CreateTranscriptionResponseVerboseJson)> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/audio/transcriptions',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * Translates audio into English.
     * @param formData
     * @returns any OK
     * @throws ApiError
     */
    public static createTranslation(
        formData: CreateTranslationRequest,
    ): CancelablePromise<(CreateTranslationResponseJson | CreateTranslationResponseVerboseJson)> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/audio/translations',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
