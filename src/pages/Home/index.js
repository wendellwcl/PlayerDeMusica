//Css
import './home.css';

//Imports
import { Link } from 'react-router-dom';

//Components
import SectionHome from '../../components/SectionHome';

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
        {sectionName: 'Top artistas', arr: artists},
        {sectionName: 'Top playlists', arr: playlistsTop},
        {sectionName: 'Mais playlists', arr: playlistsTop}
    ];


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
            {sections.map((item, i) => (
                <SectionHome key={i} sectionData={item} index={i}/>
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