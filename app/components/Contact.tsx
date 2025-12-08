'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { sendContactEmail } from "../action";



// スキーマ定義（Server Actionと合わせる）
const formSchema = z.object({
  username: z.string().min(1, { message: 'お名前は必須です' }),
  email: z.string().email({ message: '正しいメールアドレスを入力してください' }),
  subject: z.string().min(1, { message: '件名は必須です' }), // 追加
  message: z.string().min(10, { message: 'メッセージは10文字以上で入力してください' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
 const [isSubmitting,setIsSubmitting]=useState(false)
 const [resultMessage,setResultMessage]=useState('')

 const {register,
        handleSubmit,
        reset,
        formState:{errors},        
       }=useForm<FormValues>({
        resolver:zodResolver(formSchema),
       });
 const onSubmit =async(data:FormValues)=>{
    setIsSubmitting(true);
    setResultMessage('');

    const formData = new FormData();
    formData.append('username',data.username);
    formData.append('email',data.email);
    formData.append('subject',data.subject);
    formData.append('message',data.message);

     const result = await sendContactEmail(formData);

    if (result.success) {
      setResultMessage('お問い合わせありがとうございます。送信完了しました。対応まで少々お待ちください。');
      reset(); 
    } else {
      setResultMessage('送信に失敗しました。時間をおいて再度お試しください。');
    }

    setIsSubmitting(false);
}


return (
<>
<section id="contact" className="py-20 px-4 bg-neutral-100 text-black">
    <div className="max-w-2xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12 tracking-widest font-heading">CONTACT</h2>
     <form  onSubmit={handleSubmit(onSubmit)} className="space-y-6" >
        <div>
          <label htmlFor="name" className="block text-sm font-bold mb-2">名前</label>
          <input  {...register('username')} type="text" className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-accent" />
        </div>
        <div>
            <label htmlFor="email" className="block text-sm font-bold mb-2">メールアドレス</label>
            <input type="email" {...register('email')} className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-accent" />
        </div>                          
        <div>
            <label htmlFor="subject" className="block text-sm font-bold mb-2">件名</label>
            <input type="text" {...register('subject')} className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-accent" />
        </div>
        <div>
            <label htmlFor="message" className="block text-sm font-bold mb-2">内容</label>
            <textarea {...register('message')} rows={6} className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-accent"></textarea>
        </div>
        <div className="text-center pt-6">
            <button type="submit" disabled={isSubmitting} className="bg-black text-white px-12 py-4 text-sm font-bold tracking-widest hover:bg-accent transition-colors">
               {isSubmitting ? '送信中...' : '送信'}
            </button>

        {resultMessage && (
          <div className={`mt-4 p-3 rounded text-sm text-center ${resultMessage.includes('失敗') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
            {resultMessage}
          </div>
        )}

        </div>
    </form>
    </div>
 </section>
</>
    );
}
