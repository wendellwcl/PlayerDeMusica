//Imports
import { createContext, useEffect, useState  } from "react";

//Assets
import SmileForMe from '../assets/musics/smile-for-me-kidcut-main-version-01-26-3177.mp3';
import Oly from '../assets/musics/oly-walz-main-version-01-06-12377.mp3';
import JumpAround from '../assets/musics/jump-around-all-good-folks-main-version-00-49-750.mp3';


export const DataPlaylistsContext = createContext();

export const DataPlaylistsContextProvider = ( {children} ) => {

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

        //Recuperar playlist de músicas curtidas do LocalStorage
        const responseLocalStorage = localStorage.getItem('liked');
        const response = JSON.parse(responseLocalStorage);

        //Construir a playlist de músicas após a resposta obtida
        let playlist = {
            name: 'músicas_curtidas',
            musics: []
        };
        if(response){
            playlist.musics = [...response.musics];
        }

        //Setar o state referente a playlist de músicas curtidas
        setLikedMusicsPlaylist(playlist);

    }, []);


    //Colocar ou retirar música da playlist de curtidas
    function handleLikeMusic(newMusic){

        //Variável para receber as alterações que serão feitas
        let updatedMusicsArray;

        //Checar se a playlist já existe
        if(likedMusicsPlaylist){
            //Checar se a música está entre as curtidas
            const duplicate = likedMusicsPlaylist.musics.findIndex(music => music.title === newMusic.title);
            
            //Após checar duplicata...
            if(duplicate === -1){
                //... caso não esteja na playlist, a nova música será adicionada
                updatedMusicsArray = [...likedMusicsPlaylist.musics, newMusic];
            } else {
                //... caso já esteja na playlist, a ação será retirá-la
                likedMusicsPlaylist.musics.splice(duplicate, 1);
                updatedMusicsArray = likedMusicsPlaylist.musics;
            };
        } else {
            //Caso a playlist ainda não exista, a nova música será adicionada
            updatedMusicsArray = [newMusic];
        };

        //Montar uma playlist atualizada após todas as ações serem concluídas
        let updatedPlaylist = {
            name: likedMusicsPlaylist.name,
            musics: [...updatedMusicsArray]
        };

        //Setar state playlist de músicas curtidas com a playlist atualizada
        setLikedMusicsPlaylist(updatedPlaylist);

        //Armazenar a playlist atualizada no LocalStorage
        const updatedPlaylistJSON = JSON.stringify(updatedPlaylist);
        localStorage.setItem('liked', updatedPlaylistJSON);
    };


    return(
        <DataPlaylistsContext.Provider value={ { playlists, likedMusicsPlaylist, handleLikeMusic } }>
            { children }
        </DataPlaylistsContext.Provider>
    );

};