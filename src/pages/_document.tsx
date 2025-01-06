import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="uz">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Your default app description here" />
      </Head>
      <body className="antialiased dark:bg-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
