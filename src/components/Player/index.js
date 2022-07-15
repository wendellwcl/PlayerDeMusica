//Css
import './player.css';

//Assets
import SmileForMe from '../../assets/musics/smile-for-me-kidcut-main-version-01-26-3177.mp3';
import Oly from '../../assets/musics/oly-walz-main-version-01-06-12377.mp3';
import JumpAround from '../../assets/musics/jump-around-all-good-folks-main-version-00-49-750.mp3';

//Imports
import { useState, useRef } from 'react';


const Player = () => {

    //Referenciando Audio
    const audioEl = useRef();
    const music = audioEl.current;
    
    //Referenciando Barra de Progresso
    const progressBarEl = useRef();
    const progressBar = progressBarEl.current;


    //States
    const [ duration, setDuration ] = useState();
    const [ durationPercentage, setDurationPercentage ] = useState();
    const [ currentTime, setCurrentTime ] = useState();
    const [ inputValue, setInputValue ] = useState(0);
    const [ play, setPlay ] = useState(false);
    const liked = false;


    //Play e Pause
    function handleMusic(){
        play ? music.pause() : music.play();
        setPlay(!play);
    }

    //Atualizar Progresso
    function handleProgress(value){
        //Atualizar barra e input
        let progress = Math.floor(value / durationPercentage);
        progressBar.style.width = `${progress}%`;
        setInputValue(progress);
        
        //Atualizar tempo atual
        let { minutes, seconds } = timeToMinutes(value);
        setCurrentTime(`${minutes}:${seconds}`);
    };
    
    //Setar/atualizar tempo da música ao clicar no input de progresso
    function setMusicTime(value){
        music.currentTime = value * durationPercentage;
        music.play();
        if(play === false){
            setPlay(true);
        };
    };

    //Setar/atualizar duração da musica
    function handleDuration(){
        let time = music.duration
        let { minutes, seconds } = timeToMinutes(time);
        setDuration(`${minutes}:${(seconds)}`);
        setDurationPercentage(time / 100);
    };

    //Ações quando a música terminar
    function handleEnd(){
        setPlay(false);
        setInputValue(0);
        setCurrentTime(null);
        progressBar.style.width = '0%';
    };

    function timeToMinutes(time){
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        seconds = (seconds.toString()).padStart(2, '0');
        return { minutes, seconds };
    };


    return(
        <section id="player">

            <audio 
                src={JumpAround} 
                ref={audioEl} 
                onTimeUpdate={e => handleProgress(e.target.currentTime)} 
                onLoadedMetadata={() => handleDuration()}
                onEnded={() => handleEnd()}
                >
            </audio>
            
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
                    <input 
                        type="range" 
                        min='0' 
                        max='100' 
                        value={inputValue} 
                        id='input-progress'  
                        onChange={e => setMusicTime(e.target.value)} 
                    />
                    <div id='progress-bar' ref={progressBarEl}></div>
                    <span id='current-time'>{currentTime ? currentTime : '0:00'}</span>
                    <span id='duration'>{duration ? duration : '0:00'}</span>
                </div>

            </div>

        </section>
    );

};

export default Player;