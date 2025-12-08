'use server';

import { Resend } from 'resend';
import { z } from 'zod';
import * as React from 'react'; // Reactのインポートを確認
import { EmailTemplate } from './email-template';

// APIキーの読み込み確認
const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.log("❌ エラー: APIキーが読み込めていません。.env.localを確認して再起動してください。");
} else {
  console.log("✅ APIキーは存在します (先頭: " + apiKey.substring(0, 4) + "...)");
}

const resend = new Resend(apiKey);

const formSchema = z.object({
  username: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export async function sendContactEmail(formData: FormData) {
  console.log("🚀 Server Actionが呼び出されました");

  const rawData = {
    username: formData.get('username'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  // 受け取ったデータをログ表示
  console.log("📩 受け取ったデータ:", rawData);

  const validatedFields = formSchema.safeParse(rawData);

  if (!validatedFields.success) {
    console.log("❌ バリデーションエラー:", validatedFields.error.flatten().fieldErrors);
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { username, email, subject, message } = validatedFields.data;

  try {
    console.log("📤 Resendに送信を試みます...");
    
    // メール送信実行
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      
      // ↓↓↓ ここは絶対にご自身の登録メアドにしてください ↓↓↓
      to: ['rarirurero0720@gmail.com'], 
      
      replyTo: email,
      subject: `【お問い合わせ】${subject}`,
      
      // JSXとして渡す
      react: React.createElement(EmailTemplate, {
        username,
        email,
        subject,
        message,
      }),
    });

    if (error) {
      // Resend側から返ってきた詳細なエラーを表示
      console.error("❌ Resend API エラー:", error);
      return { success: false, message: `Resendエラー: ${error.message}` };
    }

    console.log("✅ 送信成功！ ID:", data?.id);
    return { success: true, message: '送信に成功しました！' };

  }  catch (err) { // 型を書かない（自動的に unknown になります）、または err: unknown とする
    console.error("❌ 予期せぬサーバーエラー:", err);

    let errorMessage = "サーバーエラーが発生しました";
    
    // エラーが Error オブジェクトかどうかチェックしてから message を取り出す
    if (err instanceof Error) {
      errorMessage = `サーバーエラー: ${err.message}`;
    }

    return { success: false, message: errorMessage };
  }
}
