//Css
import './player.css';

//Assets
import SmileForMe from '../../assets/musics/smile-for-me-kidcut-main-version-01-26-3177.mp3'

//Imports
import { useState } from 'react';


const Player = () => {

    const [ play, setPlay] = useState(false);
    const liked = false

    function handleMusic(){
        const music = document.querySelector('#music');
        play ? music.pause() : music.play();
        setPlay(!play);
    }

    function handleProgress(value){
        const progressBar = document.querySelector('#progress-bar');
        progressBar.style.width = `${value}%`;
    };

    return(
        <section id="player">

            <audio src={SmileForMe} id='music'></audio>
            
            <div id='player-controls'>

                <div id='music-display'>
                    <span id='music-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>

                <div id='controls-panel'>
                    <button type='button' id='btn-prev'>
                        <i className="bi bi-caret-left-fill"></i>
                    </button>
                    <button type='button' id='btn-play-pause' onClick={() => handleMusic()}>
                        { play ? <i className="bi bi-pause-circle-fill"></i> : <i className="bi bi-play-circle-fill"></i> }
                    </button>
                    <button type='button' id='btn-next'>
                        <i className="bi bi-caret-right-fill"></i>
                    </button>
                    <button id='btn-like'>
                        { liked ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i> }
                    </button>
                </div>

                <div id='progress-container'>
                    <input type="range" min='0' max='100' step='1' id='input-progress' onChange={e => handleProgress(e.target.value)}/>
                    <div id='progress-bar'></div>
                    <span id='current-time'>--:--</span>
                    <span id='duration'>--:--</span>
                </div>

            </div>

        </section>
    );

};

export default Player;