/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatCompletionRequestMessageContentPart } from './ChatCompletionRequestMessageContentPart';
export type ChatCompletionRequestUserMessage = {
    /**
     * The contents of the user message.
     *
     */
    content: (string | Array<ChatCompletionRequestMessageContentPart>);
    /**
     * The role of the messages author, in this case `user`.
     */
    role: ChatCompletionRequestUserMessage.role;
    /**
     * An optional name for the participant. Provides the model information to differentiate between participants of the same role.
     */
    name?: string;
};
export namespace ChatCompletionRequestUserMessage {
    /**
     * The role of the messages author, in this case `user`.
     */
    export enum role {
        USER = 'user',
    }
}

