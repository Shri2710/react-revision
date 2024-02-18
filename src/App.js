import React, { useState } from 'react';
import Tab from './Tab';

const App = () => {
    const [currentTabIndex, setCurrenttabIndex] = useState(0);

    const handleChange = (val) => {
        setCurrenttabIndex(val);
    }
    return <>
        <Tab value={currentTabIndex} onChange={handleChange}>
            <Tab.Heads>
                <Tab.Item label={"Tab 1"} index={0} />
                <Tab.Item label={"Tab 2"} index={1} />
                <Tab.Item label={"Tab 3"} index={2} />
            </Tab.Heads>
            <Tab.ContentWrapper>
                <Tab.Content index={0}>
                    <h1>I am content 1</h1>
                </Tab.Content>
                <Tab.Content index={1}>
                    <h1>I am content 2</h1>
                </Tab.Content>
                <Tab.Content index={2}>
                    <h1>I am content 3</h1>
                </Tab.Content>
            </Tab.ContentWrapper>
        </Tab>
    </>
}


export default App;