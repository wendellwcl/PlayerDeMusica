//Css
import './app.css';

//Imports
import { HashRouter } from 'react-router-dom';
import { useContext, useEffect } from 'react';

//Components
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import Player from './components/Player';
import MobileNav from './components/MobileNav';

//Context
import { DarkmodeContext } from './context/DarkmodeContext';


function App() {

  const { darkmode, setDarkmode } = useContext(DarkmodeContext);

  //checar darkmode localStorage
  useEffect(() => {
    const darkmodeStorage = localStorage.getItem('darkmode');
    setDarkmode(JSON.parse(darkmodeStorage) || false);
  }, [setDarkmode]);

  return (
    <HashRouter>
      <div className={`app ${darkmode ? 'dark' : ''}`}>
        <Header/>
        <Aside/>
        <Main/>
        <Player/>
        <MobileNav/>
      </div>  
    </HashRouter>
  );

};

export default App;