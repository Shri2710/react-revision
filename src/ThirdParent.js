import React, { useState, memo } from 'react'

const ThirdParent = memo(({handleChange}) => {
  const [counter,setCounter] = useState(0);

  let startTime = performance.now();

  while(performance.now() - startTime < 800){
    // 
  }
  const increment = ()=>{
    setCounter((prev)=> prev+1)
    handleChange?.();
  }
  return (
    <>
      I am a super super slow component
      <br />
      {counter}
      <br />
      <button onClick={increment}>Increment me</button>
    </>
  )
})

export default ThirdParent