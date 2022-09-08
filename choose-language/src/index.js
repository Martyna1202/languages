import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { LanguageContextProvider } from './UseContext/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageContextProvider>
  </React.StrictMode>
);
