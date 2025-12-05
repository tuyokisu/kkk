'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { formSchema,FormDataTypes } from '../schema';
import { FormField, FormItem, FormLabel, FormControl,Form  } from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { sendEmail } from '../action';
import { useState } from 'react';
import { toast } from 'sonner';


export default function Contact2() {

const [isSubmitting, setIsSubmitting] = useState(false);

const form =useForm<FormDataTypes>({
     resolver: zodResolver(formSchema),
     defaultValues:{
      name:"",
      email:"",
      body:"",
      subject:"",
      
     }
   })

const onSubmit = async (data:FormDataTypes)=>{
  setIsSubmitting(true)  

try {
    const result = await sendEmail(data);

    // 成功した場合
    if (result && result.success) { 
      // 📌 コンソールに成功メッセージを出力
      console.log("✅ お問い合わせの送信に成功しました。", result); 
      
      form.reset(); 
      
    } else if (result) {
      // サーバーからの応答はあったが、失敗フラグが立っている場合（バリデーションエラーなど）
      // 📌 コンソールにエラーメッセージと詳細を出力
      console.error("❌ 送信処理中にエラーが返されました。", result);
      
    } else {
      // サーバーからの応答自体がなかった場合
      // 📌 コンソールに致命的なエラーを出力
      console.error("🚨 サーバーから有効な応答がありませんでした。");
    }

  }catch (error) {
    // ネットワークエラーなど、tryブロック外で発生したエラー
    // 📌 catchされたエラーを出力
    console.error("致命的な送信エラー（ネットワーク、例外など）:", error);
    
  } finally {
    setIsSubmitting(false);
  }
};


   return(
    <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
  <FormField
    name="name"
    render={({field}) => (
      <FormItem>
        <FormLabel>お名前</FormLabel>
        <FormControl>
          <Input type="name" {...field} />
        </FormControl>
      </FormItem>
    )}
  />
  <FormField
    name="email"
    render={({field}) => (
      <FormItem>
        <FormLabel>メールアドレス</FormLabel>
        <FormControl>
          <Input type="email" {...field} />
        </FormControl>
      </FormItem>
    )}
  />
  <FormField
    name="subject"
    render={({field}) => (
      <FormItem>
        <FormLabel>件名</FormLabel>
        <FormControl>
          <Input type="text" {...field} />
        </FormControl>
      </FormItem>
    )}
  />
  <FormField
    name="body"
    render={({field}) => (
      <FormItem>
        <FormLabel>本文</FormLabel>
        <FormControl>
          <Textarea placeholder='お問い合わせ内容をご記入ください。' {...field} />
        </FormControl>
      </FormItem>
    )}
    
  />
  <Button type="submit" className="bg-black text-white px-4 py-2 rounded">
        送信
      </Button>
  </form>
</Form>

)
}
