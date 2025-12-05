// dotenv: .envファイルから環境変数を読み込むためのライブラリ
import {config} from 'dotenv'
// drizzle: Drizzle ORMのコア機能と、postgres-jsアダプター
import {drizzle} from 'drizzle-orm/postgres-js'
// postgres: 高パフォーマンスなPostgreSQLクライアントライブラリ
import postgres from 'postgres'
import * as authSchema from './schemas/auth'

// .envファイル（デフォルトのパス）から環境変数を読み込み、process.envに設定します。
// これにより、process.env.DATABASE_URL のような形で環境変数にアクセスできます。
config({path:'env'})

// 環境変数 `DATABASE_URL` を使ってPostgreSQLデータベースへの接続クライアントを初期化します。
const client =postgres(process.env.DATABASE_URL!);

// postgresクライアントをDrizzle ORMに渡して、データベース操作用の `db` インスタンスを作成します。
// この `db` オブジェクトをエクスポートすることで、アプリケーションの他の部分から
// 型安全なデータベースクエリを実行できるようになります。
export const db =drizzle({client,schema:{...authSchema}})
