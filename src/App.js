import React from 'react';
import { useState, useCallback, useEffect} from 'react';
import Button from './Button';
import { Timer } from './Timer';

const App = () => {
    const [time,setTimer] = useState(true);
    return (<>
        { time ? <Timer /> : '' }
        <button onClick={()=> setTimer((prev)=> !prev)} >Click Here Hide Timer</button>
    </>)
}


export default App;