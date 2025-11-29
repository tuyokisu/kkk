import type { Metadata } from "next";
import { Roboto_Condensed, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${robotoCondensed.variable} ${notoSansJP.variable} antialiased bg-[#111111] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
