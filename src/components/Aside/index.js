//Css
import './aside.css';

//Imports
import { NavLink } from 'react-router-dom';


const Aside = () => {

    return(
        <aside>

            <ul className='nav flex-column'>
                <li className='nav-item'>
                    <NavLink className='nav-link' to="/">
                        <i className="bi bi-house-fill"></i>
                        Início
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to="/playlist">
                        <i className="bi bi-music-note-list"></i>
                        Tocando agora
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to="/liked">
                        <i className="bi bi-heart-fill"></i>
                        Músicas curtidas
                    </NavLink>
                </li>
            </ul>

        </aside>
    );

};

export default Aside;