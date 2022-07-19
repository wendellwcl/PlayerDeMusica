//Css
import './playlist.css';

//Imports
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

//Context
import { DataPlaylistsContext } from '../../context/DataPlaylistsContext';
import { MusicPlayerContext } from "../../context/MusicPlayerContext";

//Components
import { ListItemPlaylist } from "../../components/styled-components";
import PlayingAnimation from '../../components/PlayingAnimation';


const Playlist = () => {
    
    let { playlistName } = useParams();

    const [playlist, setPlaylist] = useState();

    const { playlists } = useContext(DataPlaylistsContext);
    const { currentPlaylist, currentMusic, setCurrentMusicData } = useContext(MusicPlayerContext);

    
    //Simulando uma requisição ao servidor (porém utilizando context)
    useEffect(() => {
        function loadPlaylist(){
            const response = playlists.find(playlist => playlist.name === playlistName);
            setPlaylist(response);
        };
        
        if(playlistName){
            loadPlaylist();
        } else {
            playlistName = currentPlaylist.name;
            loadPlaylist();
        };
    }, []);
    

    return(
        <div>
            
            <h2 id='playlist-title'>{playlist && playlist.name.replace('_', ' ')}</h2>

            <ul id='musics-playlist'>
                {playlist && playlist.musics.map((music, index) => (
                    <ListItemPlaylist 
                        className='list-item-playlist' 
                        key={music.title} 
                        onClick={() => setCurrentMusicData(playlist, music, index)}
                    >
                            <h3 className={`music-title ${currentMusic && ((music.title === currentMusic.title) && 'current-music')}`}>
                                <span>{music.title} - {music.artist}</span>
                                {currentMusic && ((music.title === currentMusic.title) && <PlayingAnimation/>)}
                            </h3>
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