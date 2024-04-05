/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssistantToolsCode } from './AssistantToolsCode';
import type { AssistantToolsFunction } from './AssistantToolsFunction';
import type { AssistantToolsRetrieval } from './AssistantToolsRetrieval';
export type CreateRunRequest = {
    /**
     * The ID of the [assistant](/docs/api-reference/assistants) to use to execute this run.
     */
    assistant_id: string;
    /**
     * The ID of the [Model](/docs/api-reference/models) to be used to execute this run. If a value is provided here, it will override the model associated with the assistant. If not, the model associated with the assistant will be used.
     */
    model?: string | null;
    /**
     * Overrides the [instructions](/docs/api-reference/assistants/createAssistant) of the assistant. This is useful for modifying the behavior on a per-run basis.
     */
    instructions?: string | null;
    /**
     * Appends additional instructions at the end of the instructions for the run. This is useful for modifying the behavior on a per-run basis without overriding other instructions.
     */
    additional_instructions?: string | null;
    /**
     * Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis.
     */
    tools?: Array<(AssistantToolsCode | AssistantToolsRetrieval | AssistantToolsFunction)> | null;
    /**
     * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
     *
     */
    metadata?: Record<string, any> | null;
    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
     *
     */
    temperature?: number | null;
    /**
     * If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.
     *
     */
    stream?: boolean | null;
};

