//Css
import './app.css';

import { HashRouter } from 'react-router-dom';

//Components
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Player from "./components/Player";


function App() {

  return (
    <HashRouter>
      <div className="app">
        <Header/>
        <Aside/>
        <Main/>
        <Player/>
      </div>
    </HashRouter>
  );

};

export default App;