import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';
import { DarkmodeContextProvider } from './context/DarkmodeContext';
import { DataPlaylistsContextProvider } from './context/DataPlaylistsContext';
import { MusicPlayerContextProvider } from './context/MusicPlayerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkmodeContextProvider>
    <DataPlaylistsContextProvider>
    <MusicPlayerContextProvider>
      <App />
    </MusicPlayerContextProvider>
    </DataPlaylistsContextProvider>
    </DarkmodeContextProvider>
  </React.StrictMode>
);