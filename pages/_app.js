import React from 'react';
import { Provider } from '@skynexui/components';

const GlobalStyle = () => {
  return (
    <style jsx global>{`
      html {
        height: 100%;
      }
      body {
        min-height: 100%;
        display: flex;
        flex-direction: column;
      }
      #__next {
        display: flex;
        flex-direction: row;
      }
    `}</style>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider
        theme={{
          components: {
            textField: {
              variant: 'basicBordered',
            },
          },
        }}
      >
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}