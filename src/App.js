//Css
import './app.css';

//Imports
import { HashRouter } from 'react-router-dom';
import { useContext, useEffect } from 'react';

//Components
import InitialModal from './components/InitialModal';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import Player from './components/Player';
import MobileNav from './components/MobileNav';

//Context
import { DarkmodeContext } from './context/DarkmodeContext';


function App() {

  //Acessando informações do Darkmode
  const { darkmode, setDarkmode } = useContext(DarkmodeContext);

  
  useEffect(() => {

    //Recuperar darkmode do localStorage e setar resposta
    const darkmodeLocalStorage = localStorage.getItem('darkmode');
    const darkmodeResponse = JSON.parse(darkmodeLocalStorage) || false;
    setDarkmode(darkmodeResponse || false);

  }, [setDarkmode]);
  

  return (
    <>
      <InitialModal/>
      <HashRouter>
        <div className={`app ${darkmode && 'dark'}`}>
          <Header/>
          <Aside/>
          <Main/>
          <Player/>
          <MobileNav/>
        </div>  
      </HashRouter>
    </>
  );

};

export default App;