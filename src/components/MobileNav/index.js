//Css
import './mobileNav.css';

//Imports
import { Link } from 'react-router-dom';


const MobileNav = () => {

    return(
        <div className='mobileNav'>

            {/* ------------------- Botões ------------------- */}
            <button>
                <Link to="/">
                    <i className="bi bi-house-fill"></i>
                </Link>
            </button>
            
            <button>
                <Link to="/liked">
                    <i className="bi bi-heart-fill"></i>
                </Link>
            </button>

            <button>
                <Link to="/playlist">
                    <i className="bi bi-music-note-list"></i>
                </Link>
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
                                <i className="bi bi-music-note-beamed me-2"></i>
                                MUSIC
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-end">
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <Link className="nav-link" to="/">Link 1</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <Link className="nav-link" to="/playlist">Link 2</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <Link className="nav-link" to="/liked">Link 3</Link>
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