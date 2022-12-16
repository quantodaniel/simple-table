import { Head, Html, Main, NextScript } from "next/document";
import Navbar from "src/components/organisms/Navbar";
import Sidebar from "src/components/organisms/Sidebar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-9 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-1">
          <Sidebar />
          <section className="flex flex-col flex-1 p-6 gap-6">
            <Main />
          </section>
        </main>
        <NextScript />
      </body>
    </Html>
  );
}
