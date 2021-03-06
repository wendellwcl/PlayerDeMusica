//Css
import './mobileNav.css';

//Imports
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//Components
import { SwitchCheckbox } from '../styled-components';

//Context
import { DarkmodeContext } from '../../context/DarkmodeContext';


const MobileNav = () => {

    const { darkmode, handleToggleDarkmode } = useContext(DarkmodeContext);


    return(
        <div className='mobileNav'>

            {/* ------------------- Navbar links ------------------- */}
            <button>
                <NavLink to='/'>
                    <i className='bi bi-house-fill'></i> Início
                </NavLink>
            </button>
            
            <button>
                <NavLink to='/liked'>
                    <i className='bi bi-heart-fill'></i> Curtidas
                </NavLink>
            </button>

            <button>
                <NavLink to='/playing'>
                    <i className='bi bi-music-note-list'></i> Tocando
                </NavLink>
            </button>


            {/* ------------------- Navbar OffCanvas ------------------- */}
            <nav className='navbar'>
                <div className='container-fluid'>
                    <button className='navbar-toggler d-block d-md-none' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar'>
                        <i className='bi bi-three-dots'></i>
                    </button>
                    <div className='offcanvas offcanvas-end d-block d-md-none' tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
                        <div className='offcanvas-header'>
                            <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                                <i className='bi bi-music-note-beamed me-2'></i>
                                Music
                            </h5>
                            <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'>
                                <i className='bi bi-x-lg'></i>
                            </button>
                        </div>
                        <div className='offcanvas-body'>
                            <ul className='navbar-nav justify-content-end flex-grow-1 pe-3 text-end'>
                                <li className='nav-item d-flex justify-content-end'>
                                    <SwitchCheckbox htmlFor='switch-checkbox-offcanvas'>
                                        <span className='switch-text'>Dark mode</span>
                                        <input type='checkbox' 
                                                className='switch-checkbox' 
                                                id='switch-checkbox-offcanvas'
                                                checked={darkmode ? darkmode : false} 
                                                onChange={() => handleToggleDarkmode()}/>
                                        <span className='switch-darkmode'></span>
                                    </SwitchCheckbox>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );

};

export default MobileNav;