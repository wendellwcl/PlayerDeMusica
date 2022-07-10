//Css
import './header.css';

//Imports
import { Link } from 'react-router-dom';


const Header = () => {

    return(
        <header>
            <nav className="navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                    {/* <img src="" alt="" width="30" height="24" className="d-inline-block align-text-top" /> */}
                        <i className="bi bi-music-note-beamed"></i>
                        Music
                    </Link>
                    <label id="switch-container" htmlFor="switch-checkbox-darkmode">
                        <span id='switch-text'>Dark mode</span>
                        <input type="checkbox" id="switch-checkbox-darkmode" />
                        <span id='switch-darkmode'></span>
                    </label>
                </div>
            </nav>
        </header>
    );

};

export default Header;