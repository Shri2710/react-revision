import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
const App = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()

    return <>
        {count}
        <br />
        <br />
       <button onClick = {()=> dispatch(increment())}>Increment</button>
       <button onClick = {()=> dispatch(decrement())}>Decrement</button>
       <button onClick = {()=> dispatch(incrementByAmount(5))}>Increment by amount 5</button>
    </>
}


export default App;