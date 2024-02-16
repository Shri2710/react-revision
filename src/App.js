import React from 'react';
import { useState, useCallback } from 'react';
import Button from './Button';

const App = () => {

    const [message, setMessage] = useState("Hello User, Good Morning")

    const changeMsg = useCallback(() => {
        //    setMessage("Hello user, Good AfterNoon");

        //setMessage 2nd implementation when we want to manipulate prev data and this updates this state asynchronously

        setMessage((prevData) => {
            console.log(prevData)
            return "Hello user, Good Afternoon";
        })

    }, []);

    return <>
        <div>
            {message}
        </div>
        <div>
            <Button clickAction={changeMsg}>Click Me</Button>
        </div>
    </>
}


export default App;