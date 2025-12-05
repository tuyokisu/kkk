'use server';
import * as React from 'react';
import { Resend } from 'resend';
import { EmailTemplate } from "./email-template";
import { FormDataTypes, formSchema } from "./schema";

export const sendEmail = async(data:FormDataTypes)=>{
  const result = formSchema.safeParse(data);

  if(!result.success){
    return {error:result.error}
  }
  const parsed = result.data;
  const resend =  new Resend(process.env.RESEND_API_KEY);
 const { error } = await resend.emails.send({
    from: 'Suragi <project@sirataki.com>',
    to: [data.email],
    subject: 'お問い合わせがありがとうございます:',
    react: React.createElement(EmailTemplate, parsed),
    text:'ようこそ,'+data.name+'さん',
  });
  if (error) {
    return {error};
  }

}

