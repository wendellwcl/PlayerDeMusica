//Imports
import { createContext } from "react";

//Assets
import SmileForMe from '../assets/musics/smile-for-me-kidcut-main-version-01-26-3177.mp3';
import Oly from '../assets/musics/oly-walz-main-version-01-06-12377.mp3';
import JumpAround from '../assets/musics/jump-around-all-good-folks-main-version-00-49-750.mp3';


export const DataPlaylistsContext = createContext();

export const DataPlaylistsContextProvider = ( { children } ) => {

    const playlists = [
        {
            name: 'destaque',
            musics: [
                        {
                            title: 'Smile For Me', 
                            artist: 'Kidcut',
                            album: 'Music from Uppbeat (free for Creators!)',
                            link: 'https://uppbeat.io/t/kidcut/smile-for-me',
                            license: 'License code: 4TJIHW2NY9NOPUOV',
                            src: SmileForMe
                        },
                        {
                            title: 'Oly', 
                            artist: 'Walz',
                            album: 'Music from Uppbeat (free for Creators!)',
                            link: 'https://uppbeat.io/t/walz/oly',
                            license: 'License code: HW7DXDL0GNPWYGQV',
                            src: Oly
                        },
                        {
                            title: 'Jump Around', 
                            artist: 'All Good Folks',
                            album: 'Music from Uppbeat (free for Creators!)',
                            link: 'https://uppbeat.io/t/all-good-folks/jump-around',
                            license: 'License code: UTSPP91XSBYIWNO3',
                            src: JumpAround
                        }
                    ]
        }
    ];

    return(
        <DataPlaylistsContext.Provider value={ { playlists } }>
            { children }
        </DataPlaylistsContext.Provider>
    );

};