import React, { useState, useEffect , useCallback} from 'react';
import {debounce} from 'lodash';
const App = () => {
    const [inputData,setInputData] = useState('');
    const [data,setData] = useState();

    const fetchData = useCallback(debounce(async (value)=>{
        const data = await fetch(`https://swapi.dev/api/people?search=${value}`);
        const jsondata = await data.json();

        setData(jsondata.results);
    },500),[]);

 
    useEffect(()=>{
        return ()=>{
            fetchData.cancel();
        }
    },[])
    const handleChange = (e)=>{
        const value = e?.target?.value;
        setInputData(value);

        fetchData(value);
    }
    return <>
        <h2>Hello Welcome to Star wars</h2>
        <input type="text" value={inputData} onChange={handleChange} />
    </>
}


export default App;