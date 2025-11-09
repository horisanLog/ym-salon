import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta name="theme-color" content="#fdf8ee" />
        <meta
          name="description"
          content="AI 姿勢診断と整体・エステで姿勢改善と美容をサポートする Y'm 整体サロンの公式サイト"
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <body className="bg-surface-base text-text-primary antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
