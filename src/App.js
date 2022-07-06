//Css
import './app.css';

//Components
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Player from "./components/Player";


function App() {

  return (
    <div className="app">
      <Header/>
      <Aside/>
      <Main/>
      <Player/>
    </div>
  );

};

export default App;