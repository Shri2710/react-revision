import React from 'react';
import { useState,useRef} from 'react';
import SecondParent from './SecondParent';
const App = () => {
   const [count,setCount] = useState(0);

   const handleClick = () => {
      setCount((prev) => prev+1);
      console.log("I am a parent")
   }
    return <>
      Outer Parent: {count} <button onClick = {handleClick}>Click me</button>
      <SecondParent />
    </>
}


export default App;