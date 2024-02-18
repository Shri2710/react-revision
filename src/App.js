import React from 'react';
import Comp1 from './Comp1';
import Input from './Input';

const App = () => {

    return <>
        <Input renderTextBelow ={(value)=>{
            return <>The value is : {value}</>
        }} />
    </>
}


export default App;