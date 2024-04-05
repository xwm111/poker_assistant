/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ChatCompletionRequestSystemMessage = {
    /**
     * The contents of the system message.
     */
    content: string;
    /**
     * The role of the messages author, in this case `system`.
     */
    role: ChatCompletionRequestSystemMessage.role;
    /**
     * An optional name for the participant. Provides the model information to differentiate between participants of the same role.
     */
    name?: string;
};
export namespace ChatCompletionRequestSystemMessage {
    /**
     * The role of the messages author, in this case `system`.
     */
    export enum role {
        SYSTEM = 'system',
    }
}

