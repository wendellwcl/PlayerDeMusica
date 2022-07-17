//Imports
import { createContext, useState } from "react";


export const MusicPlayerContext = createContext();

export const MusicPlayerContextProvider = ({ children }) => {

    const [ currentPlaylist, setCurrentPlaylist ] = useState();

    return(
        <MusicPlayerContext.Provider value={ { currentPlaylist, setCurrentPlaylist } }>
            { children }
        </MusicPlayerContext.Provider>
    );

};