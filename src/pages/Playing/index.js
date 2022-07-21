//Css
import './playing.css';

//Imports
import { useContext } from "react";
import { Outlet } from 'react-router-dom';

//Context
import { MusicPlayerContext } from "../../context/MusicPlayerContext";


const Playing = () => {

    const { currentPlaylist } = useContext(MusicPlayerContext);

    
    //Caso não haja playlist sendo executada, exibir esta mensagem
    if(!currentPlaylist){
        return(
            <div className='feedback-msg'>
                <span>Nenhuma playlist tocando no momento.</span>
            </div>
        );
    };
    

    //Caso haja uma playlist sendo executada, o componente Playlist será utilizado para realizar a exibição
    return(
        <>
            <Outlet/>
        </>
    );

};

export default Playing;