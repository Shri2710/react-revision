import React, { useState, useEffect } from 'react';

const App = () => {
    const [photos,setPhotos] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await fetch('https://jsonplaceholder.typicode.com/photos');
            const jsondata = await data.json();

            setPhotos(jsondata);
        }

        fetchData();
    },[]);
 
    return <>
        <h2>Hello Welcome to the album</h2>
        {photos && photos?.length ? photos.map((pic)=> <img key={pic?.id} loading='lazy' height={200} width={200} src={pic?.url} alt={pic?.title}/>) : <div>Loading Album</div> }
    </>
}


export default App;