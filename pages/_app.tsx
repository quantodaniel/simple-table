import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "src/components/layouts/Dashboard";
import "src/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {

 const queryClient = new QueryClient();

 return (
   <>
     <Head>
       <title>Simple Table</title>
       <meta name="description" content="MaterData" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link rel="icon" href="/favicon.ico" />
     </Head>
     <QueryClientProvider client={queryClient}>
       <Layout>
         <Component {...pageProps} />
       </Layout>
     </QueryClientProvider>
   </>
 );
}
