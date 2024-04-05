/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatCompletionResponseMessage } from './ChatCompletionResponseMessage';
import type { CompletionUsage } from './CompletionUsage';
/**
 * Represents a chat completion response returned by model, based on the provided input.
 */
export type CreateChatCompletionFunctionResponse = {
    /**
     * A unique identifier for the chat completion.
     */
    id: string;
    /**
     * A list of chat completion choices. Can be more than one if `n` is greater than 1.
     */
    choices: Array<{
        /**
         * The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence, `length` if the maximum number of tokens specified in the request was reached, `content_filter` if content was omitted due to a flag from our content filters, or `function_call` if the model called a function.
         *
         */
        finish_reason: 'stop' | 'length' | 'function_call' | 'content_filter';
        /**
         * The index of the choice in the list of choices.
         */
        index: number;
        message: ChatCompletionResponseMessage;
    }>;
    /**
     * The Unix timestamp (in seconds) of when the chat completion was created.
     */
    created: number;
    /**
     * The model used for the chat completion.
     */
    model: string;
    /**
     * This fingerprint represents the backend configuration that the model runs with.
     *
     * Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
     *
     */
    system_fingerprint?: string;
    /**
     * The object type, which is always `chat.completion`.
     */
    object: CreateChatCompletionFunctionResponse.obj;
    usage?: CompletionUsage;
};
export namespace CreateChatCompletionFunctionResponse {
    /**
     * The object type, which is always `chat.completion`.
     */
    export enum obj {
        CHAT_COMPLETION = 'chat.completion',
    }
}

