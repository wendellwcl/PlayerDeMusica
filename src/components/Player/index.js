//Css
import './player.css';

//Imports
import { useState, useRef, useContext, useEffect } from 'react';

//Context
import { MusicPlayerContext } from '../../context/MusicPlayerContext';
import { DataPlaylistsContext } from '../../context/DataPlaylistsContext';


const Player = () => {

    //Informações da música atual
    const { currentPlaylist, currentMusic, currentMusicIndex, setCurrentMusicData } = useContext(MusicPlayerContext);

    //Informações de músicas favoritas
    const { likedMusicsPlaylist, handleLikeMusic } = useContext(DataPlaylistsContext);


    //Referenciando Audio
    const audioEl = useRef();
    const music = audioEl.current;
    
    //Referenciando Barra de Progresso
    const progressBarEl = useRef();
    const progressBar = progressBarEl.current;

    //Referenciando Controle de Volume
    const volumeBarEl = useRef();
    const volumeBar = volumeBarEl.current;


    //States
    const [ duration, setDuration ] = useState();
    const [ durationPercentage, setDurationPercentage ] = useState(); //Esta variável será utilizada em cálculos que obtem o tempo atual de execução da música (seu valor corresponde a 1% do tempo da música)
    const [ currentTime, setCurrentTime ] = useState();
    const [ inputProgressValue, setInputProgressValue ] = useState(0);
    const [ play, setPlay ] = useState(false);
    const [ volume, setVolume ] = useState(100);
    const [ liked, setLiked ] = useState();


    useEffect(() => {
        //Resgatar informação de volume do LocalStorage e setar state correspondente
        const volumeLocalStorage = localStorage.getItem('volume') || 100;
        setVolume(volumeLocalStorage);

        //Verificar se a música está entre as curtidas e setar state correspondente
        if(currentMusic && likedMusicsPlaylist){
            const isLiked = likedMusicsPlaylist.musics.find(music => music.title === currentMusic.title);
            setLiked(isLiked);
        };

    }, [setVolume, likedMusicsPlaylist, currentMusic]);


    //Converter / Formatar Tempo (formato "minutos : segundos")
    function timeToMinutes(time){
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        seconds = (seconds.toString()).padStart(2, '0');
        return { minutes, seconds };
    };

    //Atualizar Barra de Progresso e Tempo Atual
    function handleProgress(value){
        //Atualizar barra e input de progresso
        let progress = Math.floor(value / durationPercentage);
        progressBar.style.width = `${progress}%`;
        setInputProgressValue(progress);
        
        //Atualizar tempo atual
        let { minutes, seconds } = timeToMinutes(value);
        setCurrentTime(`${minutes}:${seconds}`);
    };
    
    //Setar / Atualizar tempo da música ao clicar no input de progresso
    function setMusicTime(value){

        /*Caso value === 100, necessário forçar seu valor para 99.9,
        pois com valor 100 acontecia um comportamento inesperado onde mais de uma música ser "passada / pulada"*/
        if(value === '100'){
            value = 99.9;
        };

        //Setar novo valor
        music.currentTime = value * durationPercentage;

        //Play
        music.play();
        if(play === false){
            setPlay(true);
        };
    };

    //Ações após carregar música
    function actionsAfterLoad(){

        //Obter e setar duração da música
        let time = music.duration;
        let { minutes, seconds } = timeToMinutes(time);
        setDuration(`${minutes}:${(seconds)}`);
        setDurationPercentage(time / 100);

        //Setar Volume
        handleVolume(volume);

        //Play
        music.play();
        setPlay(true);
    };

    //Play / Plause - Executar e Pausar música
    function handlePlayPause(){
        play ? music.pause() : music.play();
        setPlay(!play);
    };

    //Prev / Next - Passar ou Voltar música
    function handlePrevNextMusic(action){

        let newIndex = currentMusicIndex;

        //Checar ações requerida e executar
        if(action === 'prev'){
            newIndex--;
        }else if(action === 'next'){
            newIndex++;
        };

        //Setar música que deverá ser executada
        const newMusic = currentPlaylist.musics[newIndex];
        setCurrentMusicData({playlist: currentPlaylist, music: newMusic, index: newIndex});
    };

    //Setar Volume
    function handleVolume(value){
        setVolume(value);
        music.volume = (value / 100);
        volumeBar.style.width = `${value}%`;
        localStorage.setItem('volume', value);
    };

    //Curtir ou Descurtir música
    function handleLike(){
        handleLikeMusic(currentMusic);
        setLiked(!liked);
    };

    //Ações ao terminar música
    function handleEnd(){

        //Resetar states de execução, tempo e progresso
        setPlay(false);
        setCurrentTime(null);
        setInputProgressValue(0);
        progressBar.style.width = '0%';

        //Setar próxima música da playlist para executar
        if(currentMusicIndex < (currentPlaylist.musics.length - 1)){
            handlePrevNextMusic('next');
        };
    };


    return(
        <section id="player" className={currentMusic && 'show'}>

            {/* Audio */}
            <audio 
                src={currentMusic && currentMusic.src} 
                ref={audioEl} 
                onTimeUpdate={e => handleProgress(e.target.currentTime)} 
                onLoadedMetadata={() => actionsAfterLoad()}
                onEnded={() => handleEnd()}
            >
            </audio>
            

            {/* Controladores / Botões do Player */}
            <div id='player-controls'>

                {/* Display Título da Música */}
                <div id='music-display'>
                    <span id='music-title'>{currentMusic && `${currentMusic.title} - ${currentMusic.artist}`}</span>
                </div>


                {/* Botões de controle: Play, Pause, Prev, Next, Like */}
                <div id='controls-panel'>

                    {/* Btn Prev */}
                    <button 
                        type='button' 
                        id='btn-prev' 
                        className='player-btn' 
                        disabled={currentMusicIndex <= 0}
                        onClick={() => handlePrevNextMusic('prev')}
                    >
                        <i className="bi bi-caret-left-fill"></i>
                    </button>

                    {/* Btn Play / Pause */}
                    <button 
                        type='button' 
                        id='btn-play-pause' 
                        onClick={() => handlePlayPause()}
                    >
                        { play ? <i className="bi bi-pause-circle-fill"></i> : <i className="bi bi-play-circle-fill"></i> }
                    </button>

                    {/* Btn Next */}
                    <button 
                        type='button' 
                        id='btn-next' 
                        className='player-btn' 
                        disabled={currentPlaylist && (currentMusicIndex >= (currentPlaylist.musics.length - 1))}
                        onClick={() => handlePrevNextMusic('next')}
                    >
                        <i className="bi bi-caret-right-fill"></i>
                    </button>

                    {/* Btn Like */}
                    <button id='btn-like' onClick={() => handleLike()}>
                        { liked ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i> }
                    </button>
                </div>


                {/* Barra de Progresso e Displays de Tempo */}
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


                {/* Controle de Volume */}
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