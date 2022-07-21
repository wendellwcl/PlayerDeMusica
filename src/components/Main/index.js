//Css
import './main.css';

//Imports
import { Routes, Route } from 'react-router-dom';

//Pages
import Home from '../../pages/Home';
import Playing from '../../pages/Playing';
import Liked from '../../pages/Liked';
import Playlist from '../../pages/Playlist';


const Main = () => {

    return(
        <main>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/playing' element={<Playing/>}>
                    <Route path='' element={<Playlist/>}/>
                </Route>
                <Route path='/liked' element={<Liked/>}/>
                <Route path='playlist/:playlistName' element={<Playlist/>}/>
            </Routes>

        </main>
    );

};

export default Main;