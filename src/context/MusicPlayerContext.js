//Imports
import { createContext, useState } from "react";


export const MusicPlayerContext = createContext();

export const MusicPlayerContextProvider = ({ children }) => {

    const [ currentPlaylist, setCurrentPlaylist ] = useState();
    const [ currentMusic, setCurrentMusic ] = useState();
    const [ currentIndex, setCurrentIndex ] = useState();

    function setCurrentMusicData(music, index){
        setCurrentMusic(music);
        setCurrentIndex(index);
    };

    return(
        <MusicPlayerContext.Provider value={ { currentPlaylist, setCurrentPlaylist, currentMusic, currentIndex, setCurrentMusicData } }>
            { children }
        </MusicPlayerContext.Provider>
    );

};