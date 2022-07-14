//Css
import './home.css';

//Imports
import { Link } from 'react-router-dom';

//Components
import CardHome from '../../components/CardHome';

//Assets
import Jcole from '../../assets/img/jcole.png';
import Kendrick from '../../assets/img/kendricklamar.png';
import Travis from '../../assets/img/travisscott.png';
import TheWeeknd from '../../assets/img/theweeknd.png';
import World from '../../assets/img/world.png';
import Brasil from '../../assets/img/brasil.png';


const Home = () => {

    const artists = [
        {img: Jcole, name: 'J. Cole'},
        {img: Kendrick, name: 'Kendrick Lamar'},
        {img: Travis, name: 'Travis Scott'},
        {img: TheWeeknd, name: 'The Weeknd'}
    ];

    const playlists = [
        {img: World, name: 'Top 50 mundo'},
        {img: Brasil, name: 'Top 50 Brasil'}
    ];

    const sections = [
        {sectionName: 'artistas', arr: artists},
        {sectionName: 'playlists', arr: playlists}
    ];

    return(
        <section className='home-container'>

            {/* Seção Destaque */}
            <section className='highlight-container'>
                <h2 className='section-title'>Destaque</h2>
                <div className='highlight'>
                    <h3>Ouça agora</h3>
                    <p>Confira agora nossa playlist, uma seleção de músicas feita especialmente para você!</p>
                    <Link to='/playlist'></Link>
                </div>
            </section>

            {/* Seções */}
            {sections.map(section => (
                <section key={section.sectionName} className='section-container'>
                <h2 className='section-title'>Top {section.sectionName}</h2>
                <div className="card-container">
                    {section.arr.map(item => (
                        <CardHome key={item.name} name={item.name} img={item.img} />
                    ))}
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
                            A seção que você clicou é ilustrativa.
                            Por favor <mark>clique na seção "Destaque - Ouça agora"</mark> para acessar a playlist disponível.
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );

};

export default Home;