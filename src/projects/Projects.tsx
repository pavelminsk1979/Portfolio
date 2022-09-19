import React from 'react';
import stContainer from '../common/styles/Container.module.css';
import st from './Projects.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={st.projectsBlok}>
            <div className={stContainer.container}>
                <h2 className={st.title}>каталог созданий</h2>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}