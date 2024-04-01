'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import type { PokerCard } from '@/app/lib/definitions';
import OpenAI from "openai";
import { Run } from "openai/resources/beta/threads/runs/runs";
import { MessageCreateParams } from 'openai/resources/beta/threads/messages/messages.mjs';


const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};
export async function createInvoice(prevState: State,formData: FormData) {
  const validatedFields  = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
  try {
    await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;
  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  // throw new Error('Failed to Delete Invoice');
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    // revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
}

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

export async function gogpt(firstSelectCard:PokerCard|null,secondSelectCard:PokerCard|null,selectedValue:string,inputValue:string,position:string): Promise<string>{
  console.log("go gpt is running");
  let backtext = ""
  // const openai = new OpenAI();
  // const assistant_id = "asst_UwVz3euefcHCAbK9OVqOgC67";
  // console.log("create thread start");
  // try {
  //   const thread = await openai.beta.threads.create();
  //   console.log("create thread done");
  // const param:MessageCreateParams = {
  //   content: selectedValue+","+firstSelectCard?.code+secondSelectCard?.code+","+inputValue+"BBs my positon is "+position,
  //   role: "user",
  // }

  // const message:ThreadMessage = await openai.beta.threads.messages.create(thread.id,param);
  
  // console.log("create ThreadMessage");

  // await openai.beta.threads.runs.create(thread.id,{
  //   assistant_id,
  // }).then(async (run: Run) => {
  //   console.log("create run");
  //    while (true) {
  //      console.log("check run status");
       
  //      const nextrun:Run = await openai.beta.threads.runs.retrieve(thread.id,run.id);
  //      if(nextrun.status === "completed"){
  //           // console.log(nextrun);
  //           await openai.beta.threads.messages.list(thread.id).then((messages:ThreadMessagesPage) => {
  //             const aireply = messages.data[0].content;
  //             if('text' in aireply[0]){
  //               console.log(aireply[0].text);
  //               backtext =  aireply[0].text.value
  //             }
  //           });
  //           break;
  //      }else{
  //           console.log(run.status);
  //      }
       
  //    }
  // })
  // console.log("ai reply.");
  // } catch (error) {
  //   console.log(error)
  // }
  
  
  return backtext
}