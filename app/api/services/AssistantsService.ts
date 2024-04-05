/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssistantFileObject } from '../models/AssistantFileObject';
import type { AssistantObject } from '../models/AssistantObject';
import type { CreateAssistantFileRequest } from '../models/CreateAssistantFileRequest';
import type { CreateAssistantRequest } from '../models/CreateAssistantRequest';
import type { CreateMessageRequest } from '../models/CreateMessageRequest';
import type { CreateRunRequest } from '../models/CreateRunRequest';
import type { CreateThreadAndRunRequest } from '../models/CreateThreadAndRunRequest';
import type { CreateThreadRequest } from '../models/CreateThreadRequest';
import type { DeleteAssistantFileResponse } from '../models/DeleteAssistantFileResponse';
import type { DeleteAssistantResponse } from '../models/DeleteAssistantResponse';
import type { DeleteThreadResponse } from '../models/DeleteThreadResponse';
import type { ListAssistantFilesResponse } from '../models/ListAssistantFilesResponse';
import type { ListAssistantsResponse } from '../models/ListAssistantsResponse';
import type { ListMessageFilesResponse } from '../models/ListMessageFilesResponse';
import type { ListMessagesResponse } from '../models/ListMessagesResponse';
import type { ListRunsResponse } from '../models/ListRunsResponse';
import type { ListRunStepsResponse } from '../models/ListRunStepsResponse';
import type { MessageFileObject } from '../models/MessageFileObject';
import type { MessageObject } from '../models/MessageObject';
import type { ModifyAssistantRequest } from '../models/ModifyAssistantRequest';
import type { ModifyMessageRequest } from '../models/ModifyMessageRequest';
import type { ModifyRunRequest } from '../models/ModifyRunRequest';
import type { ModifyThreadRequest } from '../models/ModifyThreadRequest';
import type { RunObject } from '../models/RunObject';
import type { RunStepObject } from '../models/RunStepObject';
import type { SubmitToolOutputsRunRequest } from '../models/SubmitToolOutputsRunRequest';
import type { ThreadObject } from '../models/ThreadObject';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AssistantsService {
    /**
     * Returns a list of assistants.
     * @param limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
     *
     * @param order Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
     *
     * @param after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
     *
     * @param before A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
     *
     * @returns ListAssistantsResponse OK
     * @throws ApiError
     */
    public static listAssistants(
        limit: number = 20,
        order: 'asc' | 'desc' = 'desc',
        after?: string,
        before?: string,
    ): CancelablePromise<ListAssistantsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assistants',
            query: {
                'limit': limit,
                'order': order,
                'after': after,
                'before': before,
            },
        });
    }
    /**
     * Create an assistant with a model and instructions.
     * @param requestBody
     * @returns AssistantObject OK
     * @throws ApiError
     */
    public static createAssistant(
        requestBody: CreateAssistantRequest,
    ): CancelablePromise<AssistantObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assistants',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieves an assistant.
     * @param assistantId The ID of the assistant to retrieve.
     * @returns AssistantObject OK
     * @throws ApiError
     */
    public static getAssistant(
        assistantId: string,
    ): CancelablePromise<AssistantObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assistants/{assistant_id}',
            path: {
                'assistant_id': assistantId,
            },
        });
    }
    /**
     * Modifies an assistant.
     * @param assistantId The ID of the assistant to modify.
     * @param requestBody
     * @returns AssistantObject OK
     * @throws ApiError
     */
    public static modifyAssistant(
        assistantId: string,
        requestBody: ModifyAssistantRequest,
    ): CancelablePromise<AssistantObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assistants/{assistant_id}',
            path: {
                'assistant_id': assistantId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete an assistant.
     * @param assistantId The ID of the assistant to delete.
     * @returns DeleteAssistantResponse OK
     * @throws ApiError
     */
    public static deleteAssistant(
        assistantId: string,
    ): CancelablePromise<DeleteAssistantResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/assistants/{assistant_id}',
            path: {
                'assistant_id': assistantId,
            },
        });
    }
    /**
     * Create a thread.
     * @param requestBody
     * @returns ThreadObject OK
     * @throws ApiError
     */
    public static createThread(
        requestBody?: CreateThreadRequest,
    ): CancelablePromise<ThreadObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/threads',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieves a thread.
     * @param threadId The ID of the thread to retrieve.
     * @returns ThreadObject OK
     * @throws ApiError
     */
    public static getThread(
        threadId: string,
    ): CancelablePromise<ThreadObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/threads/{thread_id}',
            path: {
                'thread_id': threadId,
            },
        });
    }
    /**
     * Modifies a thread.
     * @param threadId The ID of the thread to modify. Only the `metadata` can be modified.
     * @param requestBody
     * @returns ThreadObject OK
     * @throws ApiError
     */
    public static modifyThread(
        threadId: string,
        requestBody: ModifyThreadRequest,
    ): CancelablePromise<ThreadObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/threads/{thread_id}',
            path: {
                'thread_id': threadId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a thread.
     * @param threadId The ID of the thread to delete.
     * @returns DeleteThreadResponse OK
     * @throws ApiError
     */
    public static deleteThread(
        threadId: string,
    ): CancelablePromise<DeleteThreadResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/threads/{thread_id}',
            path: {
                'thread_id': threadId,
            },
        });
    }
    /**
     * Returns a list of messages for a given thread.
     * @param threadId The ID of the [thread](/docs/api-reference/threads) the messages belong to.
     * @param limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
     *
     * @param order Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
     *
     * @param after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
     *
     * @param before A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
     *
     * @param runId Filter messages by the run ID that generated them.
     *
     * @returns ListMessagesResponse OK
     * @throws ApiError
     */
    public static listMessages(
        threadId: string,
        limit: number = 20,
        order: 'asc' | 'desc' = 'desc',
        after?: string,
        before?: string,
        runId?: string,
    ): CancelablePromise<ListMessagesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/threads/{thread_id}/messages',
            path: {
                'thread_id': threadId,
            },
            query: {
                'limit': limit,
                'order': order,
                'after': after,
                'before': before,
                'run_id': runId,
            },
        });
    }
    /**
     * Create a message.
     * @param threadId The ID of the [thread](/docs/api-reference/threads) to create a message for.
     * @param requestBody
     * @returns MessageObject OK
     * @throws ApiError
     */
    public static createMessage(
        threadId: string,
        requestBody: CreateMessageRequest,
    ): CancelablePromise<MessageObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/threads/{thread_id}/messages',
            path: {
                'thread_id': threadId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve a message.
     * @param threadId The ID of the [thread](/docs/api-reference/threads) to which this message belongs.
     * @param messageId The ID of the message to retrieve.
     * @returns MessageObject OK
     * @throws ApiError
     */
    public static getMessage(
        threadId: string,
        messageId: string,
    ): CancelablePromise<MessageObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/threads/{thread_id}/messages/{message_id}',
            path: {
                'thread_id': threadId,
                'message_id': messageId,
            },
        });
    }
    /**
     * Modifies a message.
     * @param threadId The ID of the thread to which this message belongs.
     * @param messageId The ID of the message to modify.
     * @param requestBody
     * @returns MessageObject OK
     * @throws ApiError
     */
    public static modifyMessage(
        threadId: string,
        messageId: string,
        requestBody: ModifyMessageRequest,
    ): CancelablePromise<MessageObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/threads/{thread_id}/messages/{message_id}',
            path: {
                'thread_id': threadId,
                'message_id': messageId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create a thread and run it in one request.
     * @param requestBody
     * @returns RunObject OK
     * @throws ApiError
     */
    public static createThreadAndRun(
        requestBody: CreateThreadAndRunRequest,
    ): CancelablePromise<RunObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/threads/runs',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Returns a list of runs belonging to a thread.
     * @param threadId The ID of the thread the run belongs to.
     * @param limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
     *
     * @param order Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
     *
     * @param after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
     *
     * @param before A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
     *
     * @returns ListRunsResponse OK
     * @throws ApiError
     */
    public static listRuns(
        threadId: string,
        limit: number = 20,
        order: 'asc' | 'desc' = 'desc',
        after?: string,
        before?: string,
    ): CancelablePromise<ListRunsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/threads/{thread_id}/runs',
            path: {
                'thread_id': threadId,
            },
            query: {
                'limit': limit,
                'order': order,
                'after': after,
                'before': before,
            },
        });
    }
    /**
     * Create a run.
     * @param threadId The ID of the thread to run.
     * @param requestBody
     * @returns RunObject OK
     * @throws ApiError
     */
    public static createRun(
        threadId: string,
        requestBody: CreateRunRequest,
    ): CancelablePromise<RunObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/threads/{thread_id}/runs',
            path: {
                'thread_id': threadId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieves a run.
     * @param threadId The ID of the [thread](/docs/api-reference/threads) that was run.
     * @param runId The ID of the run to retrieve.
     * @returns RunObject OK
     * @throws ApiError
     */
    public static getRun(
        threadId: string,
        runId: string,
    ): CancelablePromise<RunObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/threads/{thread_id}/runs/{run_id}',
            path: {
                'thread_id': threadId,
                'run_id': runId,
            },
        });
    }
    /**
     * Modifies a run.
     * @param threadId The ID of the [thread](/docs/api-reference/threads) that was run.
     * @param runId The ID of the run to modify.
     * @param requestBody
     * @returns RunObject OK
     * @throws ApiError
     */
    public static modifyRun(
        threadId: string,
        runId: string,
        requestBody: ModifyRunRequest,
    ): CancelablePromise<RunObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/threads/{thread_id}/runs/{run_id}',
            path: {
                'thread_id': threadId,
                'run_id': runId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * When a run has the `status: "requires_action"` and `required_action.type` is `submit_tool_outputs`, this endpoint can be used to submit the outputs from the tool calls once they're all completed. All outputs must be submitted in a single request.
     *
     * @param threadId The ID of the [thread](/docs/api-reference/threads) to which this run belongs.
     * @param runId The ID of the run that requires the tool output submission.
     * @param requestBody
     * @returns RunObject OK
     * @throws ApiError
     */
    public static submitToolOuputsToRun(
        threadId: string,
        runId: string,
        requestBody: SubmitToolOutputsRunRequest,
    ): CancelablePromise<RunObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/threads/{thread_id}/runs/{run_id}/submit_tool_outputs',
            path: {
                'thread_id': threadId,
                'run_id': runId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Cancels a run that is `in_progress`.
     * @param threadId The ID of the thread to which this run belongs.
     * @param runId The ID of the run to cancel.
     * @returns RunObject OK
     * @throws ApiError
     */
    public static cancelRun(
        threadId: string,
        runId: string,
    ): CancelablePromise<RunObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/threads/{thread_id}/runs/{run_id}/cancel',
            path: {
                'thread_id': threadId,
                'run_id': runId,
            },
        });
    }
    /**
     * Returns a list of run steps belonging to a run.
     * @param threadId The ID of the thread the run and run steps belong to.
     * @param runId The ID of the run the run steps belong to.
     * @param limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
     *
     * @param order Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
     *
     * @param after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
     *
     * @param before A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
     *
     * @returns ListRunStepsResponse OK
     * @throws ApiError
     */
    public static listRunSteps(
        threadId: string,
        runId: string,
        limit: number = 20,
        order: 'asc' | 'desc' = 'desc',
        after?: string,
        before?: string,
    ): CancelablePromise<ListRunStepsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/threads/{thread_id}/runs/{run_id}/steps',
            path: {
                'thread_id': threadId,
                'run_id': runId,
            },
            query: {
                'limit': limit,
                'order': order,
                'after': after,
                'before': before,
            },
        });
    }
    /**
     * Retrieves a run step.
     * @param threadId The ID of the thread to which the run and run step belongs.
     * @param runId The ID of the run to which the run step belongs.
     * @param stepId The ID of the run step to retrieve.
     * @returns RunStepObject OK
     * @throws ApiError
     */
    public static getRunStep(
        threadId: string,
        runId: string,
        stepId: string,
    ): CancelablePromise<RunStepObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/threads/{thread_id}/runs/{run_id}/steps/{step_id}',
            path: {
                'thread_id': threadId,
                'run_id': runId,
                'step_id': stepId,
            },
        });
    }
    /**
     * Returns a list of assistant files.
     * @param assistantId The ID of the assistant the file belongs to.
     * @param limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
     *
     * @param order Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
     *
     * @param after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
     *
     * @param before A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
     *
     * @returns ListAssistantFilesResponse OK
     * @throws ApiError
     */
    public static listAssistantFiles(
        assistantId: string,
        limit: number = 20,
        order: 'asc' | 'desc' = 'desc',
        after?: string,
        before?: string,
    ): CancelablePromise<ListAssistantFilesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assistants/{assistant_id}/files',
            path: {
                'assistant_id': assistantId,
            },
            query: {
                'limit': limit,
                'order': order,
                'after': after,
                'before': before,
            },
        });
    }
    /**
     * Create an assistant file by attaching a [File](/docs/api-reference/files) to an [assistant](/docs/api-reference/assistants).
     * @param assistantId The ID of the assistant for which to create a File.
     *
     * @param requestBody
     * @returns AssistantFileObject OK
     * @throws ApiError
     */
    public static createAssistantFile(
        assistantId: string,
        requestBody: CreateAssistantFileRequest,
    ): CancelablePromise<AssistantFileObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assistants/{assistant_id}/files',
            path: {
                'assistant_id': assistantId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieves an AssistantFile.
     * @param assistantId The ID of the assistant who the file belongs to.
     * @param fileId The ID of the file we're getting.
     * @returns AssistantFileObject OK
     * @throws ApiError
     */
    public static getAssistantFile(
        assistantId: string,
        fileId: string,
    ): CancelablePromise<AssistantFileObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assistants/{assistant_id}/files/{file_id}',
            path: {
                'assistant_id': assistantId,
                'file_id': fileId,
            },
        });
    }
    /**
     * Delete an assistant file.
     * @param assistantId The ID of the assistant that the file belongs to.
     * @param fileId The ID of the file to delete.
     * @returns DeleteAssistantFileResponse OK
     * @throws ApiError
     */
    public static deleteAssistantFile(
        assistantId: string,
        fileId: string,
    ): CancelablePromise<DeleteAssistantFileResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/assistants/{assistant_id}/files/{file_id}',
            path: {
                'assistant_id': assistantId,
                'file_id': fileId,
            },
        });
    }
    /**
     * Returns a list of message files.
     * @param threadId The ID of the thread that the message and files belong to.
     * @param messageId The ID of the message that the files belongs to.
     * @param limit A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
     *
     * @param order Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
     *
     * @param after A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
     *
     * @param before A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
     *
     * @returns ListMessageFilesResponse OK
     * @throws ApiError
     */
    public static listMessageFiles(
        threadId: string,
        messageId: string,
        limit: number = 20,
        order: 'asc' | 'desc' = 'desc',
        after?: string,
        before?: string,
    ): CancelablePromise<ListMessageFilesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/threads/{thread_id}/messages/{message_id}/files',
            path: {
                'thread_id': threadId,
                'message_id': messageId,
            },
            query: {
                'limit': limit,
                'order': order,
                'after': after,
                'before': before,
            },
        });
    }
    /**
     * Retrieves a message file.
     * @param threadId The ID of the thread to which the message and File belong.
     * @param messageId The ID of the message the file belongs to.
     * @param fileId The ID of the file being retrieved.
     * @returns MessageFileObject OK
     * @throws ApiError
     */
    public static getMessageFile(
        threadId: string,
        messageId: string,
        fileId: string,
    ): CancelablePromise<MessageFileObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/threads/{thread_id}/messages/{message_id}/files/{file_id}',
            path: {
                'thread_id': threadId,
                'message_id': messageId,
                'file_id': fileId,
            },
        });
    }
}
