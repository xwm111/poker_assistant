/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TranscriptionSegment } from './TranscriptionSegment';
export type CreateTranslationResponseVerboseJson = {
    /**
     * The language of the output translation (always `english`).
     */
    language: string;
    /**
     * The duration of the input audio.
     */
    duration: string;
    /**
     * The translated text.
     */
    text: string;
    /**
     * Segments of the translated text and their corresponding details.
     */
    segments?: Array<TranscriptionSegment>;
};

