import React from 'react';
import '@/styles/globals.scss';
import { AppProps } from 'next/app';
import { UserProvider } from 'contexts/userContext';

function MyApp({ Component, pageProps }: AppProps) {
  const userId = 'user';
  return (
    <UserProvider userId={userId}>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
