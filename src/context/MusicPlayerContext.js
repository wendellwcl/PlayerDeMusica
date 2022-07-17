//Imports
import { createContext, useState } from "react";


export const MusicPlayerContext = createContext();

export const MusicPlayerContextProvider = ({ children }) => {

    const [ currentPlaylist, setCurrentPlaylist ] = useState();
    const [ currentMusic, setCurrentMusic ] = useState();

    return(
        <MusicPlayerContext.Provider value={ { currentPlaylist, setCurrentPlaylist, currentMusic, setCurrentMusic } }>
            { children }
        </MusicPlayerContext.Provider>
    );

};