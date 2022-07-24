//Css
import './initialModal.css';

//Imports
import { useRef } from 'react';


const InitialModal = () => {

    //Referenciando InitialModal
    const initialModalEl = useRef();
    const initialModal = initialModalEl.current;

    //Fechar InitialModal
    function closeInitialModal(){
        initialModal.classList.add('close');
    };


    return(
        <div id='initial-modal-fade' ref={initialModalEl}>
            <div id='initial-modal'>
                <h2 className='initial-modal-title'>Créditos e direitos autorais</h2>
                <div id="initial-modal-body">

                    <p>
                        Este é um <mark>projeto de propósito estudantil</mark>, sem nenhum intuito de violação de direitos autorais.
                        As músicas que podem ser reproduzidas aqui são de livre uso e foram encontradas na plataforma
                        <a href="https://uppbeat.io/" target='_blank' rel='noreferrer'> uppbeat.io</a>.
                        Todos os devidos créditos sobre as obras estarão disponívies abaixo, nas áreas onde as músicas estarão disponíveis e na documentação do projeto.
                    </p>

                    <h3 className='initial-modal-subtitle'>Créditos sobre as músicas:</h3>
                    
                    <ul id='initial-modal-list'>
                        <li>
                            <ul>
                                <li className='music-title'>Música: Smile For Me</li>
                                <li>Autor: Kidcut</li>
                                <li><a href="https://uppbeat.io/t/kidcut/smile-for-me" target='_blank' rel='noreferrer'>
                                    https://uppbeat.io/t/kidcut/smile-for-me
                                </a></li>
                                <li>License code: 4TJIHW2NY9NOPUOV</li>
                                <li>Music from Uppbeat (free for Creators!)</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li className='music-title'>Música: Oly</li>
                                <li>Autor: Walz</li>
                                <li><a href="https://uppbeat.io/t/walz/oly" target='_blank' rel='noreferrer'>
                                    https://uppbeat.io/t/walz/oly
                                </a></li>
                                <li>License code: HW7DXDL0GNPWYGQV</li>
                                <li>Music from Uppbeat (free for Creators!)</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li className='music-title'>Música: Jump around</li>
                                <li>Autor: All Good Folks</li>
                                <li><a href="https://uppbeat.io/t/all-good-folks/jump-around" target='_blank' rel='noreferrer'>
                                    https://uppbeat.io/t/all-good-folks/jump-around
                                </a></li>
                                <li>License code: UTSPP91XSBYIWNO3</li>
                                <li>Music from Uppbeat (free for Creators!)</li>
                            </ul>
                        </li>
                    </ul>

                </div>

                <div>
                    <button type='button' onClick={() => closeInitialModal()}>Entendi</button>
                </div>

            </div>
        </div>
    );

};

export default InitialModal;