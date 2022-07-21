//Imports
import { createContext, useEffect, useState  } from "react";

//Assets
import SmileForMe from '../assets/musics/smile-for-me-kidcut-main-version-01-26-3177.mp3';
import Oly from '../assets/musics/oly-walz-main-version-01-06-12377.mp3';
import JumpAround from '../assets/musics/jump-around-all-good-folks-main-version-00-49-750.mp3';


export const DataPlaylistsContext = createContext();

export const DataPlaylistsContextProvider = ( { children } ) => {

    const playlists = [
        {
            name: 'ouça_agora',
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

    const [ likedMusicsPlaylist, setLikedMusicsPlaylist ] = useState();

    useEffect(() => {
        const responseLocalStorage = localStorage.getItem('liked');
        const response = JSON.parse(responseLocalStorage);
        let playlist = {
            name: 'músicas_curtidas',
            musics: []
        };
        if(response){
            playlist.musics = [...response.musics];
        }
        setLikedMusicsPlaylist(playlist);
    }, []);

    function handleLikeMusic(newMusic){
        let updatedMusicsArray;

        if(likedMusicsPlaylist){
            const duplicate = likedMusicsPlaylist.musics.findIndex(music => music.title === newMusic.title);

            if(duplicate === -1){
                updatedMusicsArray = [...likedMusicsPlaylist.musics, newMusic];
            } else {
                likedMusicsPlaylist.musics.splice(duplicate, 1);
                updatedMusicsArray = likedMusicsPlaylist.musics;
            };
        } else {
            updatedMusicsArray = [newMusic];
        };

        let updatedPlaylist = {
            name: likedMusicsPlaylist.name,
            musics: [...updatedMusicsArray]
        };

        setLikedMusicsPlaylist(updatedPlaylist);

        const updatedPlaylistJSON = JSON.stringify(updatedPlaylist);
        localStorage.setItem('liked', updatedPlaylistJSON);
    };


    return(
        <DataPlaylistsContext.Provider value={ { playlists, likedMusicsPlaylist, handleLikeMusic } }>
            { children }
        </DataPlaylistsContext.Provider>
    );

};