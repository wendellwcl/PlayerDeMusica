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

    return(
        <div>
            
            <h2 id='playlist-title'>músicas curtidas</h2>

            <ul id='musics-playlist'>
                {likedMusicsPlaylist && likedMusicsPlaylist.map((music, index) => (
                    <ListItemPlaylist 
                        className='list-item-playlist' 
                        key={music.title} 
                        onClick={() => setCurrentMusicData({music, index})}
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