import React from 'react';
import Button from './Button';

const App = ()=>{

    const handleClick = ()=>{
        console.log("CLicked from the App.js")
    }
    return <>
    <h1>Helloooo there</h1>

    <Button clickAction = {handleClick}>Hello</Button>
    </>
}


export default App;