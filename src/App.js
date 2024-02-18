import React from 'react';
import { useState,useRef, lazy, Suspense} from 'react';
import Heading from './Heading';
import { ThemeContext } from './context';
import NavBar from './NavBar';
const App = () => {
    const [theme,setTheme] = useState("dark");
    return <ThemeContext.Provider value={ [theme,setTheme]}>
            <NavBar clickAction={setTheme}></NavBar>
    </ThemeContext.Provider>
}


export default App;