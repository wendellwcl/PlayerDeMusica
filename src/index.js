import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';
import { DarkmodeContextProvider } from './context/DarkmodeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkmodeContextProvider>
      <App />
    </DarkmodeContextProvider>
  </React.StrictMode>
);