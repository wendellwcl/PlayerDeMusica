//Css
import './header.css';

//Imports
import { Link } from 'react-router-dom';
import { useContext } from 'react';

//Components
import { SwitchCheckbox } from '../styled-components';

//Context
import { DarkmodeContext } from '../../context/DarkmodeContext';


const Header = () => {

    const { darkmode, handleToggleDarkmode } = useContext(DarkmodeContext);

    return(
        <header>
            <nav className='navbar'>
                <div className='container'>
                    <Link className='navbar-brand' to='/'>
                        <i className='bi bi-music-note-beamed me-2'></i>
                        Music
                    </Link>
                    <SwitchCheckbox htmlFor='switch-checkbox-header' id='switch-header'>
                        <span className='switch-text'>Dark mode</span>
                        <input type='checkbox' 
                                className='switch-checkbox' 
                                id='switch-checkbox-header' 
                                checked={darkmode ? darkmode : false} 
                                onChange={() => handleToggleDarkmode()}/>
                        <span className='switch-darkmode'></span>
                    </SwitchCheckbox>
                </div>
            </nav>
        </header>
    );

};

export default Header;