import React from 'react';
import ReactDOM from 'react-dom';

const isMorning = true;

const morningTxt = 'Hello good morning';
const afternoonTxt = 'Hello good afternoon';

const morningEle = <div>{morningTxt} <span>its 6AM now</span></div>
const eveningEle = <div>{afternoonTxt}<span>its 6PM now</span></div>
const greetingEle = <h1>{isMorning ? morningEle : eveningEle}</h1>

const GreetingELement = ()=> {
    return <div>
        {greetingEle}
        i am inside the component
    </div>
}
const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<GreetingELement />);