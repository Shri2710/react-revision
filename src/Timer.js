import React from 'react'
import { useEffect, useState } from 'react'

export const Timer = () => {
  const [counter,setCounter] = useState(0);

  useEffect(()=>{
    
    const interval = setInterval(()=>{
        console.log("Running Timer")
        setCounter((prev)=> prev+1);
    },1000);

    return ()=>{
        clearInterval(interval);
    }
  },[]);
  return (
    <div>{counter}</div>
  )
}
