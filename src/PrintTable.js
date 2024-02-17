import React,{useMemo} from 'react'

const generateTable = (count)=>{
    const arr = [];

    const startTime = performance.now();

    while(performance.now() - startTime < 800);
    for(let i=1;i<=10;i++){
        arr.push(<div>{count * i}</div>)
    }

    return arr;
}
const PrintTable = ({count}) => {
  const table = useMemo(()=> generateTable(count),[count]);
  return (
    <div>{table}</div>
  )
}

export default PrintTable