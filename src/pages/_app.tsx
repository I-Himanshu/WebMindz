// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css'; // Import your global styles here

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Include your FontAwesome CDN link here */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      {/* Render the component passed as a prop (e.g., your pages) */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
