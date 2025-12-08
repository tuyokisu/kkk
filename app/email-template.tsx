import * as React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface EmailTemplateProps {
  username: string;
  email: string;
  subject: string; // 追加
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  email,
  subject,
  message,
}) => (
  <Html>
    <Head />
    <Preview>【お問い合わせ】{subject}</Preview>
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans">
        <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
          <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
            お問い合わせ通知
          </Heading>
          
          <Text className="text-black text-[14px] leading-[24px]">
            <strong>お名前:</strong> {username}
          </Text>
          <Text className="text-black text-[14px] leading-[24px]">
            <strong>メールアドレス:</strong> {email}
          </Text>
          {/* 件名を表示 */}
          <Text className="text-black text-[14px] leading-[24px]">
            <strong>件名:</strong> {subject}
          </Text>

          <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          
          <Text className="text-[#666666] text-[12px] leading-[24px]">
            <strong>メッセージ内容:</strong>
          </Text>
          <Section className="p-4 bg-gray-100 rounded">
             <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);