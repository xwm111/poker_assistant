/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DoneEvent } from './DoneEvent';
import type { ErrorEvent } from './ErrorEvent';
import type { MessageStreamEvent } from './MessageStreamEvent';
import type { RunStepStreamEvent } from './RunStepStreamEvent';
import type { RunStreamEvent } from './RunStreamEvent';
import type { ThreadStreamEvent } from './ThreadStreamEvent';
/**
 * Represents an event emitted when streaming a Run.
 *
 * Each event in a server-sent events stream has an `event` and `data` property:
 *
 * ```
 * event: thread.created
 * data: {"id": "thread_123", "object": "thread", ...}
 * ```
 *
 * We emit events whenever a new object is created, transitions to a new state, or is being
 * streamed in parts (deltas). For example, we emit `thread.run.created` when a new run
 * is created, `thread.run.completed` when a run completes, and so on. When an Assistant chooses
 * to create a message during a run, we emit a `thread.message.created event`, a
 * `thread.message.in_progress` event, many `thread.message.delta` events, and finally a
 * `thread.message.completed` event.
 *
 * We may add additional events over time, so we recommend handling unknown events gracefully
 * in your code. See the [Assistants API quickstart](/docs/assistants/overview) to learn how to
 * integrate the Assistants API with streaming.
 *
 */
export type AssistantStreamEvent = (ThreadStreamEvent | RunStreamEvent | RunStepStreamEvent | MessageStreamEvent | ErrorEvent | DoneEvent);

