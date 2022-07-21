//Imports
import { createContext, useState } from 'react';


export const DarkmodeContext = createContext();

export const DarkmodeContextProvider = ( {children} ) => {

    //Darkmode State
    const [ darkmode, setDarkmode ] = useState();
    

    //Alterar state do Darkmode
    function handleToggleDarkmode(){
        setDarkmode(!darkmode);
        localStorage.setItem('darkmode', JSON.stringify(!darkmode));
    };


    return(
        <DarkmodeContext.Provider value={ { darkmode, setDarkmode, handleToggleDarkmode } }>
            {children}
        </DarkmodeContext.Provider>
    );

};