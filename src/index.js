import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';
import { DarkmodeContextProvider } from './context/DarkmodeContext';
import { PlaylistsContextProvider } from './context/PlaylistsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkmodeContextProvider>
    <PlaylistsContextProvider>
      <App />
    </PlaylistsContextProvider>
    </DarkmodeContextProvider>
  </React.StrictMode>
);