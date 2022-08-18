import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import { isDev } from './constants';
import './i18n';
import { CurrencyProvider } from './contexts/CurrencyContext';
import { AuthContextProvider } from './contexts/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';

if (isDev) {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <AuthContextProvider>
            <CurrencyProvider>
              <App />
            </CurrencyProvider>
          </AuthContextProvider>
        </ChakraProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
