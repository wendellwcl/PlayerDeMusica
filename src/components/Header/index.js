//Css
import './header.css';

//Imports
import { Link } from 'react-router-dom';


const Header = () => {

    return(
        <header>
            <nav className="navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                    {/* <img src="" alt="" width="30" height="24" className="d-inline-block align-text-top" /> */}
                        <i className="bi bi-music-note-beamed me-2"></i>
                        Music
                    </Link>
                </div>
            </nav>
        </header>
    );

};

export default Header;