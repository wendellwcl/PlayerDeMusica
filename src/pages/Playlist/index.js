//Css
import './playlist.css';

//Imports
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

//Context
import { DataPlaylistsContext } from '../../context/DataPlaylistsContext';
import { MusicPlayerContext } from "../../context/MusicPlayerContext";

//Components
import { ListItemPlaylist } from "../../components/styled-components";


const Playlist = () => {
    
    const { playlistName } = useParams();

    const { playlists } = useContext(DataPlaylistsContext);
    const { currentPlaylist, setCurrentPlaylist, setCurrentMusic } = useContext(MusicPlayerContext);

    
    //Simulando uma requisição ao servidor (porém utilizando context)
    useEffect(() => {
        async function loadPlaylist(){
            const response = await playlists.find(playlist => playlist.name === playlistName);
            await setCurrentPlaylist(response);
        };
        loadPlaylist();
    }, []);
    

    return(
        <div>
            
            <h2 id='playlist-title'>{currentPlaylist && currentPlaylist.name}</h2>

            <ul id='musics-playlist'>
                {currentPlaylist && currentPlaylist.musics.map(music => (
                    <ListItemPlaylist className='list-item-playlist' key={music.title} onClick={() => setCurrentMusic(music)}>
                        <h3 className='music-title'>{music.title} - {music.artist}</h3>
                        <h4 className='album'>{music.album}</h4>
                        <a href={music.link} target='_blank' rel='noreferrer' className='music-link'>{music.link}</a>
                        <span className='license'>{music.license}</span>
                    </ListItemPlaylist>
                ))}
            </ul>

        </div>
    );

};

export default Playlist;