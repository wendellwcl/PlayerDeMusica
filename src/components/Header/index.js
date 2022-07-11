//Css
import './header.css';

//Imports
import { Link } from 'react-router-dom';
import { SwitchCheckbox } from '../styled-components';
import { useContext } from 'react';

//Context
import { DarkmodeContext } from '../../context/DarkmodeContext';


const Header = () => {

    const { darkmode, setDarkmode } = useContext(DarkmodeContext);

    return(
        <header>
            <nav className='navbar'>
                <div className='container'>
                    <Link className='navbar-brand' to='/'>
                    {/* <img src='' alt='' width='30' height='24' className='d-inline-block align-text-top' /> */}
                        <i className='bi bi-music-note-beamed'></i>
                        Music
                    </Link>
                    <SwitchCheckbox htmlFor='switch-checkbox-header' id='switch-header'>
                        <span className='switch-text'>Dark mode</span>
                        <input type='checkbox' className='switch-checkbox' id='switch-checkbox-header' checked={darkmode} onChange={() => setDarkmode(!darkmode)}/>
                        <span className='switch-darkmode'></span>
                    </SwitchCheckbox>
                </div>
            </nav>
        </header>
    );

};

export default Header;