import * as React from 'react';
import Snake from '../components/snake-container';
import Apple from '../components/apple-container';

const App = ()=>{
    return <div id="wrapper">
        <Snake />
        <Apple />
    </div>;
};

export default App;