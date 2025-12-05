import * as React from "react";
import {Text,Heading,Tailwind} from '@react-email/components'
import { FormDataTypes } from "./schema";


export const  EmailTemplate:React.FC<Readonly<FormDataTypes>>=({
  name,
  email,
  subject,
  body
})=>(
  <Tailwind>
  <Heading> ようこそ, {name}! </Heading>

  
  <Text>お問い合わせありがとうございます。</Text>
  <Text>名前:{name}</Text>
  <Text>メールアドレス:{email}</Text>
  <Text>件名:{subject}</Text>
  <Text>お問い合わせ内容:{body}</Text>
  

 
  </Tailwind>
);

