//Imports
import { useParams } from "react-router-dom";

const Playlist = () => {

    const { playlist } = useParams();

    /* const { playlists } = useContext(playlistContext) */

    return(
        <div>
            Playlist: 
            {playlist}
        </div>
    );

};

export default Playlist;