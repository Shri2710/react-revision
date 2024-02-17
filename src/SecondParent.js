import React, {useCallback} from 'react'
import ThirdParent from './ThirdParent';
const SecondParent = () => {

  const handleChange = useCallback(()=>{
    console.log("This is a second parent");
  },[]);
  return (
    <>
        <div>This is second parent</div>
        <br/>
        <ThirdParent handleChange={handleChange} />
    </>
  )
}

export default SecondParent