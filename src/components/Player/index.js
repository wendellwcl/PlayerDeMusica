//Css
import './player.css';

//Imports
import { useState, useRef, useContext, useEffect } from 'react';

//Context
import { MusicPlayerContext } from '../../context/MusicPlayerContext';


const Player = () => {

    //informações da Música Atual
    const { currentPlaylist, currentMusic, currentMusicIndex, setCurrentMusicData } = useContext(MusicPlayerContext);


    //Referenciando Audio
    const audioEl = useRef();
    const music = audioEl.current;
    
    //Referenciando Barra de Progresso
    const progressBarEl = useRef();
    const progressBar = progressBarEl.current;

    //Referenciando Volume
    const volumeBarEl = useRef();
    const volumeBar = volumeBarEl.current;


    //States
    const [ duration, setDuration ] = useState();
    const [ durationPercentage, setDurationPercentage ] = useState();
    const [ currentTime, setCurrentTime ] = useState();
    const [ inputProgressValue, setInputProgressValue ] = useState(0);
    const [ play, setPlay ] = useState(false);
    const [ volume, setVolume ] = useState(100);
    const liked = false;


    //Resgatando informação de volume do localStorage
    useEffect(() => {
        const volumeLocalStorage = localStorage.getItem('volume') || 100;
        setVolume(volumeLocalStorage);
    }, [setVolume]);


    //Atualizar Progresso
    function handleProgress(value){
        //Atualizar barra e input
        let progress = Math.floor(value / durationPercentage);
        progressBar.style.width = `${progress}%`;
        setInputProgressValue(progress);
        
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

        //Setando Volume
        handleVolume(volume);

        //Play / Executar música
        music.play();
        setPlay(true);
    };

    //Ações dos botões de controle
    function handlePlayPause(){
        play ? music.pause() : music.play();
        setPlay(!play);
    }

    function handlePrevNextMusic(action){
        let newIndex = currentMusicIndex;

        if(action === 'prev'){
            newIndex--
        }else if(action === 'next'){
            newIndex++
        };

        const nextMusic = currentPlaylist.musics[newIndex];
        setCurrentMusicData(nextMusic, newIndex);
    };

    function handleVolume(value){
        setVolume(value);
        music.volume = (value / 100);
        volumeBar.style.width = `${value}%`;
        localStorage.setItem('volume', value);
    };

    //Ações quando a música terminar
    function handleEnd(){
        setPlay(false);
        setInputProgressValue(0);
        setCurrentTime(null);
        progressBar.style.width = '0%';
        if(currentMusicIndex < (currentPlaylist.musics.length - 1)){
            handlePrevNextMusic('next');
        };
    };

    function timeToMinutes(time){
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        seconds = (seconds.toString()).padStart(2, '0');
        return { minutes, seconds };
    };


    return(
        <section id="player" className={currentMusic && 'show'}>

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
                    <span id='music-title'>{currentMusic && `${currentMusic.title} - ${currentMusic.artist}`}</span>
                </div>

                <div id='controls-panel'>
                    <button 
                        type='button' 
                        id='btn-prev' 
                        className='player-btn' 
                        disabled={currentMusicIndex <= 0}
                        onClick={e => handlePrevNextMusic('prev')}
                    >
                        <i className="bi bi-caret-left-fill"></i>
                    </button>

                    <button 
                        type='button' 
                        id='btn-play-pause' 
                        onClick={() => handlePlayPause()}
                    >
                        { play ? <i className="bi bi-pause-circle-fill"></i> : <i className="bi bi-play-circle-fill"></i> }
                    </button>

                    <button 
                        type='button' 
                        id='btn-next' 
                        className='player-btn' 
                        disabled={currentPlaylist && (currentMusicIndex >= (currentPlaylist.musics.length - 1))}
                        onClick={e => handlePrevNextMusic('next')}
                    >
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
                        value={inputProgressValue} 
                        id='input-progress'  
                        onChange={e => setMusicTime(e.target.value)} 
                    />
                    <div id='progress-bar' ref={progressBarEl}></div>
                    <span id='current-time'>{currentTime ? currentTime : '0:00'}</span>
                    <span id='duration'>{duration ? duration : '0:00'}</span>
                </div>

                <div id="volume-container">
                    <label htmlFor="volume-input">
                        <i className="bi bi-volume-up-fill"></i>
                    </label>
                    <div id='volume-bar'>
                        <input 
                            type="range" 
                            id="volume-input"
                            min='0'
                            max='100'
                            value={volume}
                            onChange={e => handleVolume(e.target.value)}
                        />
                        <div id="volume-bar-percentage" ref={volumeBarEl}></div>
                    </div>
                </div>

            </div>

        </section>
    );

};

export default Player;