//Css
import './home.css';

//Imports
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

//Components
import CardHome from '../../components/CardHome';

//Assets
import Jcole from '../../assets/img/jcole.png';
import Kendrick from '../../assets/img/kendricklamar.png';
import Travis from '../../assets/img/travisscott.png';
import TheWeeknd from '../../assets/img/theweeknd.png';
import World from '../../assets/img/world.png';
import Brasil from '../../assets/img/brasil.png';
import Dance from '../../assets/img/dance.png';


const Home = () => {

    const artists = [
        {img: Jcole, name: 'J. Cole'},
        {img: Kendrick, name: 'Kendrick Lamar'},
        {img: Travis, name: 'Travis Scott'},
        {img: TheWeeknd, name: 'The Weeknd'}
    ];

    const playlistsTop = [
        {img: World, name: 'Top 50 mundo'},
        {img: Brasil, name: 'Top 50 Brasil'},
        {img: Dance, name: 'Top Dance'},
        {img: World, name: 'Top 50 mundo'},
        {img: Brasil, name: 'Top 50 Brasil'},
        {img: Dance, name: 'Top Dance'},
        {img: World, name: 'Top 50 mundo'},
        {img: Brasil, name: 'Top 50 Brasil'},
        {img: Dance, name: 'Top Dance'}
    ];

    const sections = [
        {sectionName: 'artistas', arr: artists},
        {sectionName: 'playlists', arr: playlistsTop}
    ];

    //Checar e monitorar largura da tela para setar display dos botões de cada seção
    useEffect(() => {

        function handleResize(){
            //Referenciar elementos e percorrê-los
            document.querySelectorAll('.cards-row').forEach(el => {
                //Obter medidas
                const width = el.offsetWidth;
                const parent = el.parentNode;
                const parentWidth = parent.offsetWidth;

                //Caso: largura do conteúdo interno seja maior que a largura do container: adicionar classe responsável por mostrar os botões
                if(width > parentWidth){
                    parent.childNodes[0].classList.add('show');
                    parent.childNodes[1].classList.add('show');
                } else {
                    //Caso não, retirar a classe, para que os botões não sejam mais exibidos
                    parent.childNodes[0].classList.remove('show');
                    parent.childNodes[1].classList.remove('show');
                };

                //Caso a tela seja redimensionada, resetar posicionamentos
                //Isso impede comportamentos indesejados e garante que o elemento não quebre
                el.style.marginLeft = '0px';
                parent.scrollTo(0, 0);
            });
        };

        //Adicionar listener de execução
        window.addEventListener('resize', handleResize);

        //Executar função ao carregar
        handleResize();
    });


    //Realizar scroll das seções através dos botões
    function handleRowScroll(target, action){

        //Variável que irá receber o elemento selecionado
        let rowEl;

        //Referenciar elemento pai / container
        const parent = target.parentNode;

        //Obter elementos que fazem parte da seção
        const nodeList = parent.childNodes;
        //Iterar sobre os elementos e setar o elemento desejado
        nodeList.forEach(item => {
            if(item.classList.contains('cards-row')){
                rowEl = item;
            };
        });

        //Obter valor atual da marginLeft do elemento que será manipulado
        let currentMarginValue = window.getComputedStyle(rowEl).getPropertyValue('margin-left');
        //Formatar o valor (tipo Number)
        currentMarginValue = parseInt(currentMarginValue.replace('px', ''));

        //Obter largura da tela (será utilizada no cálculo do valor de scroll)
        const slideValue = window.innerWidth / 2;

        //Checar ação a ser feita
        if(action === 'right'){
            //Calcular valor de scroll
            let value = currentMarginValue - slideValue;

            if(value < (parent.offsetWidth - rowEl.offsetWidth)){
                //Caso valor de scroll ultrapasse o máximo/mínimo que o elemento deve ser 'scrollado', setar valor para o máximo desejado
                value = (parent.offsetWidth - rowEl.offsetWidth) - 40;
                //Setar valor ao elemento
                rowEl.style.marginLeft = `${value}px`;
            } else {
                //Caso valor esteja dentro do desejado, setar valor ao elemento
                rowEl.style.marginLeft = `${value}px`;
            };
            
        } else if (action === 'left'){
            //Calcular valor
            let value = currentMarginValue + slideValue;
            if(value > 0){
                //Caso valor de scroll ultrapasse o máximo/mínimo que o elemento deve ser 'scrollado', setar valor para o máximo desejado
                value = 0;
                //Setar valor ao elemento
                rowEl.style.marginLeft = `${value}px`;
            } else {
                //Caso valor esteja dentro do desejado, setar valor ao elemento
                rowEl.style.marginLeft = `${value}px`;
            };
        };
    };


    return(
        <section className='home-container'>

            {/* Seção Destaque */}
            <section className='highlight-container'>
                <h2 className='section-title'>Destaque</h2>
                <div className='highlight'>
                    <h3>Ouça agora</h3>
                    <p>Confira agora nossa playlist, uma seleção de músicas feita especialmente para você!</p>
                    <Link to={`/playlist/ouça_agora`}></Link>
                </div>
            </section>

            {/* Seções */}
            {sections.map(section => (
                <section key={section.sectionName} className='section-container'>
                    <h2 className='section-title'>Top {section.sectionName}</h2>
                    <div className='cards-container'>
                        <button type='button' className='btn-row' onClick={e => handleRowScroll(e.target, 'left')}>
                            <i className="bi bi-caret-left-fill"></i>
                        </button>
                        <button type='button' className='btn-row' onClick={e => handleRowScroll(e.target, 'right')}>
                            <i className="bi bi-caret-right-fill"></i>
                        </button>
                        <div className="cards-row">
                            {section.arr.map((item, i) => (
                                <CardHome key={i} name={item.name} img={item.img} />
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Modal */}
            <div className="modal fade" id="infoModal" tabIndex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="infoModalLabel">Seção ilustrativa</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className='bi bi-x-lg'></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            A seção que você clicou é apenas ilustrativa.
                            Por favor <mark>clique em "Destaque - Ouça agora"</mark> no topo da página para acessar a playlist disponível.
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );

};

export default Home;