import * as React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import App from './App';

declare global {
  interface Window {
    __APP_DATA__?: Partial<React.ComponentProps<typeof App>>;
  }
}

const config = { ...(window.__APP_DATA__ || {}) };

delete window.__APP_DATA__;

hydrate(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App {...config} />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
