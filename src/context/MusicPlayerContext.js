//Imports
import { createContext, useState } from "react";


export const MusicPlayerContext = createContext();

export const MusicPlayerContextProvider = ( { children } ) => {

    const [ currentPlaylist, setCurrentPlaylist ] = useState();
    const [ currentMusic, setCurrentMusic ] = useState();
    const [ currentMusicIndex, setCurrentMusicIndex ] = useState();

    function setCurrentMusicData(music, index){
        setCurrentMusic(music);
        setCurrentMusicIndex(index);
    };

    return(
        <MusicPlayerContext.Provider value={ { currentPlaylist, setCurrentPlaylist, currentMusic, currentMusicIndex, setCurrentMusicData } }>
            { children }
        </MusicPlayerContext.Provider>
    );

};