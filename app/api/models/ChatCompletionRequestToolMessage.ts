/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ChatCompletionRequestToolMessage = {
    /**
     * The role of the messages author, in this case `tool`.
     */
    role: ChatCompletionRequestToolMessage.role;
    /**
     * The contents of the tool message.
     */
    content: string;
    /**
     * Tool call that this message is responding to.
     */
    tool_call_id: string;
};
export namespace ChatCompletionRequestToolMessage {
    /**
     * The role of the messages author, in this case `tool`.
     */
    export enum role {
        TOOL = 'tool',
    }
}

