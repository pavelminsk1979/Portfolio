import React from 'react';
import {Header} from "./header/Header";
import {Main} from "./mainBlok/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;
