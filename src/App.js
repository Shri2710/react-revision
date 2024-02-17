import React from 'react';
import { useState,useRef} from 'react';
import PrintTable from './PrintTable';
const App = () => {
   const [counter1,setCounter1] = useState(0);
   const [counter2,setCounter2] = useState(0);
    return <>
         Counter 1: {counter1}
         <button onClick={()=>setCounter1((prev)=> prev+1)}>count1 ++</button>
         <br />
         Counter 2: {counter2}
         <button onClick={()=>setCounter2((prev)=> prev+1)}>count2 ++</button>

         <PrintTable count={counter1} />
    </>
}


export default App;