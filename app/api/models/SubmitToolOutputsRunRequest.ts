/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SubmitToolOutputsRunRequest = {
    /**
     * A list of tools for which the outputs are being submitted.
     */
    tool_outputs: Array<{
        /**
         * The ID of the tool call in the `required_action` object within the run object the output is being submitted for.
         */
        tool_call_id?: string;
        /**
         * The output of the tool call to be submitted to continue the run.
         */
        output?: string;
    }>;
    /**
     * If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.
     *
     */
    stream?: boolean | null;
};

