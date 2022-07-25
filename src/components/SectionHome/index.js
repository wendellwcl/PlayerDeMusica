//Css
import './sectionHome.css';

//Imports
import { useEffect } from "react";

//Components
import CardHome from "../CardHome";


const SectionHome = ( {sectionData, index} ) => {
    
    //Monitorar largura da tela para setar display dos botões de cada seção
    useEffect(() => {

        function handleResize(){
            //Referenciar elementos
            const rowEl = document.querySelector(`#section-${index}`);
            const parentEl = rowEl.parentNode;

            //Obter medidas
            const width = rowEl.offsetWidth;
            const parentWidth = parentEl.offsetWidth;

            //Caso: largura do conteúdo interno seja maior que a largura do container: adicionar classe responsável por mostrar os botões
            if(width > parentWidth){
                document.querySelector(`#btn-left-${index}`).classList.add('show');
                document.querySelector(`#btn-rigth-${index}`).classList.add('show');
            } else {
                //Caso não, retirar a classe, para que os botões não sejam mais exibidos
                document.querySelector(`#btn-left-${index}`).classList.remove('show');
                document.querySelector(`#btn-rigth-${index}`).classList.remove('show');
            };

            //Caso a tela seja redimensionada, resetar posicionamentos
            //Isso impede comportamentos indesejados e garante que o elemento não quebre
            rowEl.style.marginLeft = '0px';
            parentEl.scrollTo(0, 0);
        };

        //Adicionar listener de execução
        window.addEventListener('resize', handleResize);

        //Executar função ao carregar
        handleResize();
    });


    //Realizar scroll das seções através dos botões
    function handleRowScroll(action){
        //Referenciar elementos
        const rowEl = document.querySelector(`#section-${index}`);
        const parentEl = rowEl.parentNode;

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

            if(value < (parentEl.offsetWidth - rowEl.offsetWidth)){
                //Caso valor de scroll ultrapasse o máximo/mínimo que o elemento deve ser 'scrollado', setar valor para o máximo desejado
                value = (parentEl.offsetWidth - rowEl.offsetWidth) - 40;
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
        <section key={sectionData.sectionName} className='section-container'>
            <h2 className='section-title'>{sectionData.sectionName}</h2>
            <div className='cards-container'>
                <button type='button' id={`btn-left-${index}`} className='btn-row' onClick={() => handleRowScroll('left')}>
                    <i className="bi bi-caret-left-fill"></i>
                </button>
                <button type='button' id={`btn-rigth-${index}`} className='btn-row' onClick={() => handleRowScroll('right')}>
                    <i className="bi bi-caret-right-fill"></i>
                </button>
                <div className="cards-row" id={`section-${index}`}>
                    {sectionData.arr.map((item, i) => (
                        <CardHome key={i} name={item.name} img={item.img} />
                    ))}
                </div>
            </div>
        </section>
    );

};

export default SectionHome;