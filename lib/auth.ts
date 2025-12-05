import { getBaseURL } from "./get-base-url";
//nanoid: ユニークなIDを生成するためのライブラリです。ここではユーザーIDなどを生成するために使われています。
import {nanoid} from 'nanoid'
//drizzleAdapter: better-auth をDrizzle ORMと連携させるための「アダプター」です。
// これにより、ユーザー情報やセッション情報をDrizzle経由でデータベースに保存・管理できます。
import {drizzleAdapter} from "better-auth/adapters/drizzle"
//nextCookies: better-auth がNext.jsのCookieを正しく扱えるようにするためのプラグインです。
// セッション情報をCookieに保存・読み取りする際に必要となります。
import {nextCookies} from "better-auth/next-js"
//db: Drizzle ORMのデータベース接続インスタンスです。@/db というパスからインポートされています。
import {db} from "@/db"
//betterAuth: 認証システムを初期化し、設定するためのメイン関数です
import {betterAuth} from "better-auth"
import *as schema from '@/db/schemas/auth' 

export const auth =betterAuth({
   //認証フローで使用されるベースURLを設定します
  baseURL:getBaseURL(),
  // データベースに関する設定です。
  database:drizzleAdapter(db,{
  //provider: "pg": 使用しているデータベースがPostgreSQLであることを示しています。
  // これは drizzle.config.ts の dialect:'postgresql' という設定と一致しています。
  provider:"pg",
  //better-authが自動で管理するテーブル名（例: user, session）を複数形（users, sessions）にする設定です。
  usePlural:true,
  schema,
}),
advanced:{
  //: データベースに新しいレコード（例: 新規ユーザー）を作成する際のID生成ロジックを上書きしています。
  // デフォルトのID生成方法の代わりに、nanoid を使って10文字のランダムなIDを生成するように指定しています。
  database:{
    generateId:()=>nanoid(10),
  },
},
//nextCookies() を指定することで、Next.jsのサーバー環境
// （Server ComponentsやAPI Routesなど）でCookieの読み書きが正しく行われるようになります。
plugins:[nextCookies()]
});