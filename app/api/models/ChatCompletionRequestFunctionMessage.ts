/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * @deprecated
 */
export type ChatCompletionRequestFunctionMessage = {
    /**
     * The role of the messages author, in this case `function`.
     */
    role: ChatCompletionRequestFunctionMessage.role;
    /**
     * The contents of the function message.
     */
    content: string | null;
    /**
     * The name of the function to call.
     */
    name: string;
};
export namespace ChatCompletionRequestFunctionMessage {
    /**
     * The role of the messages author, in this case `function`.
     */
    export enum role {
        FUNCTION = 'function',
    }
}

