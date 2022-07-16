//Css
import './main.css';

//Imports
import { Routes, Route } from 'react-router-dom';

//Pages
import Home from '../../pages/Home';
import Playlist from '../../pages/Playlist';
import Liked from '../../pages/Liked';


const Main = () => {

    return(
        <main>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='playlist/:playlistName' element={<Playlist/>}/>
                <Route path='liked' element={<Liked/>}/>
            </Routes>

        </main>
    );

};

export default Main;