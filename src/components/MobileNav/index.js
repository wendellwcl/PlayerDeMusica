//Css
import './mobileNav.css';

//Imports
import { NavLink } from 'react-router-dom';
import { SwitchCheckbox } from '../styled-components';


const MobileNav = () => {

    return(
        <div className='mobileNav'>

            {/* ------------------- Botões ------------------- */}
            <button>
                <NavLink to="/">
                    <i className="bi bi-house-fill"></i>
                    Início
                </NavLink>
            </button>
            
            <button>
                <NavLink to="/liked">
                    <i className="bi bi-heart-fill"></i>
                    Curtidas
                </NavLink>
            </button>

            <button>
                <NavLink to="/playlist">
                    <i className="bi bi-music-note-list"></i>
                    Tocando
                </NavLink>
            </button>


            {/* ------------------- Navbar OffCanvas ------------------- */}
            <nav className="navbar">
                <div className="container-fluid">
                    <button className="navbar-toggler d-block d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <i className="bi bi-three-dots"></i>
                    </button>
                    <div className="offcanvas offcanvas-end d-block d-md-none" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                {/* <img src="" alt="" width="30" height="24" className="d-inline-block align-text-top" /> */}
                                <i className="bi bi-music-note-beamed"></i>
                                Music
                            </h5>
                            <button type="button" className='btn-close' data-bs-dismiss="offcanvas" aria-label="Close">
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-end">
                                <li className="nav-item d-flex justify-content-end">
                                    <SwitchCheckbox htmlFor="switch-checkbox-offcanvas">
                                        <span className="switch-text">Dark mode</span>
                                        <input type="checkbox" className="switch-checkbox" id="switch-checkbox-offcanvas"/>
                                        <span className="switch-darkmode"></span>
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