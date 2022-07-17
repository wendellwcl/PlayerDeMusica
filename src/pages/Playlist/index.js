//Imports
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

//Context
import { DataPlaylistsContext } from '../../context/DataPlaylistsContext';
import { MusicPlayerContext } from "../../context/MusicPlayerContext";


const Playlist = () => {
    
    const { playlistName } = useParams();

    const { playlists } = useContext(DataPlaylistsContext);
    const { currentPlaylist, setCurrentPlaylist } = useContext(MusicPlayerContext);

    
    //Simulando uma requisição ao servidor (porém utilizando context)
    useEffect(() => {
        async function loadPlaylist(){
            const response = playlists.find(item => item.name === playlistName);
            setCurrentPlaylist(response);
        };
        loadPlaylist();
    }, []);
    

    return(
        <div>
            {currentPlaylist && currentPlaylist.musics.map(music => (
                <div key={music.name}>{music.name}</div>
            ))}
        </div>
    );

};

export default Playlist;