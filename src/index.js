import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';

//Context
import { DarkmodeContextProvider } from './context/DarkmodeContext';
import { DataPlaylistsContextProvider } from './context/DataPlaylistsContext';
import { MusicPlayerContextProvider } from './context/MusicPlayerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* Context Provider - Darkmode */}
    <DarkmodeContextProvider>

    {/* Context Provider - Informações gerais de playlists (simulando um servidor) */}
    <DataPlaylistsContextProvider>

    {/* Context Provider - Informações sobre o que está tocando */}
    <MusicPlayerContextProvider>

      <App />

    </MusicPlayerContextProvider>
    </DataPlaylistsContextProvider>
    </DarkmodeContextProvider>
  </React.StrictMode>
);