'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import type { PokerCard } from '@/app/lib/definitions';
import { AssistantsService } from '../api/services/AssistantsService';
import { CreateMessageRequest } from '../api/models/CreateMessageRequest';
import { ChatCompletionRequestUserMessage } from '../api/models/ChatCompletionRequestUserMessage';
import { CreateThreadAndRunRequest } from '../api/models/CreateThreadAndRunRequest';
import { CreateThreadRequest } from '../api/models/CreateThreadRequest';
import {
  MessageContentTextObject,
  MessageContentImageFileObject,
} from '../api';


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function gogpt(
  firstSelectCard: PokerCard | null,
  secondSelectCard: PokerCard | null,
  selectedValue: string,
  inputValue: string,
  position: string,
): Promise<string> {
  console.log('go gpt is running');
  let backtext = '';
  const assismessage: CreateMessageRequest = {
    content: selectedValue+","+firstSelectCard?.code+secondSelectCard?.code+","+inputValue+"BBs my positon is "+position,
    role: ChatCompletionRequestUserMessage.role.USER,
  };
  const threadAssis: CreateThreadRequest = {
    messages: [assismessage],
  };

  const assistantrequest: CreateThreadAndRunRequest = {
    assistant_id: 'asst_KcgNQ93pNx9vNJMbSuVfZZEC',
    thread: threadAssis,
  };
  let runId = '';
  let threadId = '';
  await AssistantsService.createThreadAndRun(assistantrequest)
    .then((run) => {
      runId = run.id;
      threadId = run.thread_id;
    })
    .catch((error) => {
      console.log(error);
    });

  while (true) {
    console.log('检索 run运行状态');

    let runobj = await AssistantsService.getRun(threadId, runId);
    console.log("runobj.status:",runobj.status);
    
    if (runobj.status === 'completed') {
      await AssistantsService.listMessages(threadId).then((res) => {
        let mcto: MessageContentTextObject | MessageContentImageFileObject =
          res.data[0].content[0];
        if (mcto.type === 'text') {
          console.log('获取到结果是');

          console.log(mcto.text.value);
          backtext = mcto.text.value;
          console.log("backtext mcto.text.value;",backtext);
          return backtext;
        }
      });
      break;
    }
  }
  console.log("backtext",backtext);
  

  return backtext;
}
