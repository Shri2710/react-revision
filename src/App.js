import React from 'react';
import { useState,useRef, lazy, Suspense} from 'react';
import {createPortal} from 'react-dom';
const App = () => {
    const [showModal,toggleModal] = useState(false);
    return <>
        Hey I am inside the root <button onClick={()=> toggleModal((prev)=> !prev)}>Toggle Modal</button>
        {showModal && createPortal(<div>This is the Modal content</div>,document.body)}
    </>
}


export default App;