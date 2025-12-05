//React環境（クライアントサイド）で動作する認証クライアントを作成します。
import {createAuthClient} from "better-auth/react"
import {getBaseURL} from "@/lib/get-base-url"
//サーバーサイドの型情報をクライアントサイドに連携させる役割を持ちます。
import {inferAdditionalFields} from "better-auth/client/plugins"
import {auth} from "@/lib/auth"





export const authClient =createAuthClient({
  //baseURL: getBaseURL(): クライアントサイドから認証関連のAPIリクエスト
  // （例: ログイン状態の確認）を送る際の、APIサーバーのベースURLを設定します。
  baseURL:getBaseURL(),
  //クライアントサイドとサーバーサイドの型を連携させるための重要なプラグインです。typeofはそのもの、(id:1 name:太郎)->(id,name)のみを抽出
  plugins:[inferAdditionalFields<typeof auth>()]
})