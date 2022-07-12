import { createContext, useState } from 'react';

export const DarkmodeContext = createContext();

export const DarkmodeContextProvider = ( {children} ) => {

    const [darkmode, setDarkmode] = useState(null);

    function handleDarkmode(){
        setDarkmode(!darkmode);
        localStorage.setItem('darkmode', JSON.stringify(!darkmode));
    };

    return(
        <DarkmodeContext.Provider value={ { darkmode, setDarkmode, handleDarkmode } }>
            {children}
        </DarkmodeContext.Provider>
    );

};