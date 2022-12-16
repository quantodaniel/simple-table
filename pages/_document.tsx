import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-9 flex flex-col min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
