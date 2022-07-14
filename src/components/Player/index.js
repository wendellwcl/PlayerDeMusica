//Css
import './player.css';


const Player = () => {

    function handleProgress(value){
        const progressBar = document.querySelector('#progress-bar');
        progressBar.style.width = `${value}%`;
    };

    return(
        <section id="player">
            
            <div id='progress-container'>
                <input type="range" min='0' max='100' step='1' id='input-progress' onChange={e => handleProgress(e.target.value)}/>
                <div id='progress-bar'></div>
                <span id='current-time'>--:--</span>
                <span id='duration'>--:--</span>
            </div>

        </section>
    );

};

export default Player;