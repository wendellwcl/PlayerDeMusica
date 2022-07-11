import { createContext, useState } from "react";

export const DarkmodeContext = createContext();

export const DarkmodeContextProvider = ( {children} ) => {

    const [darkmode, setDarkmode] = useState(false);

    return(
        <DarkmodeContext.Provider value={ { darkmode, setDarkmode } }>
            {children}
        </DarkmodeContext.Provider>
    );

};