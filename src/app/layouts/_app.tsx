// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
 import '../styles/globals.css'; // Import your global styles here

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
