//Css
import './app.css';

//Components
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Player from "./components/Player";


function App() {

  return (
    <div className="app container-fluid g-0">
      <div className="row g-0">
        <Header/>
        <Aside/>
        <Main/>
        <Player/>
      </div>
    </div>
  );

};

export default App;