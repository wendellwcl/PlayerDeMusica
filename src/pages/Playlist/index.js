//Imports
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

//Context
import { PlaylistsContext } from "../../context/PlaylistsContext";


const Playlist = () => {
    
    const { playlistName } = useParams();

    const { playlists, currentPlaylist, setCurrentPlaylist } = useContext(PlaylistsContext);

    
    //Simulando uma requisição ao servidor (porém utilizando context)
    useEffect(() => {
        function loadPlaylist(){
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