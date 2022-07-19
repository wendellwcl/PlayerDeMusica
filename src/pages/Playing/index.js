//Css
import './playing.css';

//Imports
import { useContext } from "react";
import { Outlet } from 'react-router-dom';

//Context
import { MusicPlayerContext } from "../../context/MusicPlayerContext";


const Playing = () => {

    const { currentPlaylist } = useContext(MusicPlayerContext);
    
    if(!currentPlaylist){
        return(
            <div id='nothing-playing-msg'>
                <span>Nenhuma playlist tocando no momento.</span>
            </div>
        );
    };

    return(
        <>
            <Outlet/>
        </>
    );

};

export default Playing;