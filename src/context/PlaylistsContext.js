//Imports
import { createContext } from "react";

//Assets
import SmileForMe from '../assets/musics/smile-for-me-kidcut-main-version-01-26-3177.mp3';
import Oly from '../assets/musics/oly-walz-main-version-01-06-12377.mp3';
import JumpAround from '../assets/musics/jump-around-all-good-folks-main-version-00-49-750.mp3';

export const PlaylistsContext = createContext();

export const PlaylistsContextProvider = ({ children }) => {

    const playlists = [
        {
            name: 'destaque',
            musics: [
                        {name: 'Smile form me', src: SmileForMe},
                        {name: 'Oly', src: Oly},
                        {name: 'Jump Around', src: JumpAround}
                    ]
        }
    ];

    return(
        <PlaylistsContext.Provider value={ { playlists } }>
            { children }
        </PlaylistsContext.Provider>
    );

};