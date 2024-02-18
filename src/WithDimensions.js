import React from 'react';
import { useState,useRef, useEffect } from 'react';
const withDimensions = (Component)=>{
    return function WithDimensions(props){
        const [width,setWidth] = useState(null);
        const [height,setHeight] = useState(null);

        const compRef = useRef();

        useEffect(()=>{
            if(compRef.current){
                setWidth(compRef.current.offsetWidth);
                setHeight(compRef.current.offsetHeight);
            }
        },[compRef]);
        return <Component ref={compRef} width={width} height={height} {...props} />
    }
}

export default withDimensions;