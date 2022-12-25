import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "microcms-jamstack-blog", //エンドポイント
  apiKey: process.env.API_KEY, //envファイルに保存したAPIキー
});
