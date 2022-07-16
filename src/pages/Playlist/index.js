//Imports
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

//Context
import { PlaylistsContext } from "../../context/PlaylistsContext";


const Playlist = () => {

    const { playlists } = useContext(PlaylistsContext);

    const { playlistName } = useParams();
    const [ playlist, setPlaylist ] = useState();

    useEffect(() => {
        setPlaylist((playlists.find(item => item.name === playlistName)).musics);
    }, [playlistName, playlists]);

    return(
        <div>
            {playlist && playlist.map(music => (
                <div>{music.name}</div>
            ))}
        </div>
    );

};

export default Playlist;