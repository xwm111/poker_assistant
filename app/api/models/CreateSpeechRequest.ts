/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateSpeechRequest = {
    /**
     * One of the available [TTS models](/docs/models/tts): `tts-1` or `tts-1-hd`
     *
     */
    model: (string | 'tts-1' | 'tts-1-hd');
    /**
     * The text to generate audio for. The maximum length is 4096 characters.
     */
    input: string;
    /**
     * The voice to use when generating the audio. Supported voices are `alloy`, `echo`, `fable`, `onyx`, `nova`, and `shimmer`. Previews of the voices are available in the [Text to speech guide](/docs/guides/text-to-speech/voice-options).
     */
    voice: CreateSpeechRequest.voice;
    /**
     * The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`.
     */
    response_format?: CreateSpeechRequest.response_format;
    /**
     * The speed of the generated audio. Select a value from `0.25` to `4.0`. `1.0` is the default.
     */
    speed?: number;
};
export namespace CreateSpeechRequest {
    /**
     * The voice to use when generating the audio. Supported voices are `alloy`, `echo`, `fable`, `onyx`, `nova`, and `shimmer`. Previews of the voices are available in the [Text to speech guide](/docs/guides/text-to-speech/voice-options).
     */
    export enum voice {
        ALLOY = 'alloy',
        ECHO = 'echo',
        FABLE = 'fable',
        ONYX = 'onyx',
        NOVA = 'nova',
        SHIMMER = 'shimmer',
    }
    /**
     * The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`.
     */
    export enum response_format {
        MP3 = 'mp3',
        OPUS = 'opus',
        AAC = 'aac',
        FLAC = 'flac',
        WAV = 'wav',
        PCM = 'pcm',
    }
}

