//Css
import './header.css';


const Header = () => {

    return(
        <header>
        
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">MUSIC</a>
                    <button className="navbar-toggler d-block d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end d-block d-md-none" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">MUSIC</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link 1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link 2</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    );

};

export default Header;