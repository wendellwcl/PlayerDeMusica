//Css
import './liked.css';

//Imports
import { useContext } from "react";

//Context
import { DataPlaylistsContext } from "../../context/DataPlaylistsContext";
import { MusicPlayerContext } from "../../context/MusicPlayerContext";

//Components
import { ListItemPlaylist } from "../../components/styled-components";
import PlayingAnimation from "../../components/PlayingAnimation";


const Liked = () => {

    const { likedMusicsPlaylist } = useContext(DataPlaylistsContext);
    const { currentMusic, setCurrentMusicData } = useContext(MusicPlayerContext);


    if(!likedMusicsPlaylist || likedMusicsPlaylist.musics.length === 0){
        return(
            <div>
                <h2 id='playlist-title'>músicas curtidas</h2>
                <span className="info-msg">Você não possui músicas favoritadas.</span>
            </div>
        );
    };

    return(
        <div>
            
            <h2 id='playlist-title'>músicas curtidas</h2>

            <ul id='musics-playlist'>
                {likedMusicsPlaylist && likedMusicsPlaylist.musics.map((music, index) => (
                    <ListItemPlaylist 
                        className='list-item-playlist' 
                        key={music.title} 
                        onClick={() => setCurrentMusicData({playlist: likedMusicsPlaylist, music, index})}
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

export default Liked;