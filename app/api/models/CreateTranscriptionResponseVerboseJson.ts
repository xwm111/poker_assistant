/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TranscriptionSegment } from './TranscriptionSegment';
import type { TranscriptionWord } from './TranscriptionWord';
/**
 * Represents a verbose json transcription response returned by model, based on the provided input.
 */
export type CreateTranscriptionResponseVerboseJson = {
    /**
     * The language of the input audio.
     */
    language: string;
    /**
     * The duration of the input audio.
     */
    duration: string;
    /**
     * The transcribed text.
     */
    text: string;
    /**
     * Extracted words and their corresponding timestamps.
     */
    words?: Array<TranscriptionWord>;
    /**
     * Segments of the transcribed text and their corresponding details.
     */
    segments?: Array<TranscriptionSegment>;
};

