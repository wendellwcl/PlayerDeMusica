//Css
import './player.css';

//Imports
import { useState, useRef, useContext } from 'react';

import { MusicPlayerContext } from '../../context/MusicPlayerContext';


const Player = () => {

    //Música Atual
    const { currentMusic } = useContext(MusicPlayerContext);


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
    function handlePlayPause(){
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

    //Ações após uma música ser carregada
    function actionsAfterLoad(){

        //Obtendo e setando duração da música
        let time = music.duration
        let { minutes, seconds } = timeToMinutes(time);
        setDuration(`${minutes}:${(seconds)}`);
        setDurationPercentage(time / 100);

        //Play / Executar música
        music.play();
        setPlay(true);
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
                src={currentMusic && currentMusic.src} 
                ref={audioEl} 
                onTimeUpdate={e => handleProgress(e.target.currentTime)} 
                onLoadedMetadata={() => actionsAfterLoad()}
                onEnded={() => handleEnd()}
            >
            </audio>
            
            <div id='player-controls'>

                <div id='music-display'>
                    <span id='music-title'>{currentMusic ? `${currentMusic.title} - ${currentMusic.artist}` : ''}</span>
                </div>

                <div id='controls-panel'>
                    <button type='button' id='btn-prev'>
                        <i className="bi bi-caret-left-fill"></i>
                    </button>
                    <button type='button' id='btn-play-pause' onClick={() => handlePlayPause()}>
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