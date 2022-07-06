//Css
import './aside.css';

//Imports
import { Link } from 'react-router-dom';


const Aside = () => {

    return(
        <aside>

            <ul className='nav flex-column'>
                <li className='nav-item'>
                    <Link className='nav-link' to="/">Início</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/playlist">Tocando agora</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/liked">Músicas curtidas</Link>
                </li>
            </ul>

        </aside>
    );

};

export default Aside;