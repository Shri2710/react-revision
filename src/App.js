import React from 'react';
import { useState,useRef, lazy, Suspense} from 'react';

const Text = lazy(()=> import('./Text'));
const App = () => {
    const [showText,toggleTxt] = useState(false);
    return <>
         <button onClick={()=> toggleTxt((prev)=> !prev)}>Toogle Txt</button>
          
         {showText && <Suspense fallback={<div>Loading...</div>}>
          <Text>This is the text</Text>
          </Suspense>}
    </>
}


export default App;