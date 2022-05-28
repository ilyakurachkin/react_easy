import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {AppTitle} from "./Components/AppTitle/AppTitle";


function App() {
    return (
        <div>
            <AppTitle title={"This is app component"}/>
            <AppTitle title={"My friends"}/>
            <Rating value={3}/>
            <Accordion titleValue={"MEnu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default App;
