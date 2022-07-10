//Css
import './aside.css';

//Imports
import { Link } from 'react-router-dom';


const Aside = () => {

    return(
        <aside>

            <ul className='nav flex-column'>
                <li className='nav-item'>
                    <Link className='nav-link' to="/">
                        <i className="bi bi-house-fill"></i>
                        Início
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/playlist">
                        <i className="bi bi-music-note-list"></i>
                        Tocando agora
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/liked">
                        <i className="bi bi-heart-fill"></i>
                        Músicas curtidas
                    </Link>
                </li>
            </ul>

        </aside>
    );

};

export default Aside;