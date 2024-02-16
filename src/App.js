import React from 'react';
import { useState,useRef} from 'react';
import Input from './Input';

const App = () => {
    let count = 0;
    const ref = useRef(0);
    const [counter,setCounter] = useState(0);
    const inputRef = useRef(null);

    return <>
     <button onClick={()=> {count+=1}}>Click here to increment Local var</button>
     <button onClick={()=> {ref.current += 1}}>Click here to increment Ref var</button>
     <button onClick={()=> setCounter((prev)=> prev+1)}>Click here to increment State var</button>
     <div>
        <span>Local var: {count}</span>
        <span>Ref var: {ref.current}</span>
        <span>State var: {counter}</span>
     </div>
     <h1>DOM Example</h1>
     <Input ref={inputRef} />
     <button onClick={()=>{
        if(inputRef.current) inputRef.current.focus();
     }}>Focus the inputbox</button>
    </>
}


export default App;