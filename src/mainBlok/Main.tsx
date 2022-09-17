import React from 'react';
import st from './Main.module.css';


export const Main = () => {
    return (
        <div className={st.mainBlok}>
            <div className={st.container}>
            <div className={st.name}>
                <span>Привет</span>
                <h1>Я Павел Потапов</h1>
                <p>моя работа-Frontend разработка</p>
                </div>
            <div className={st.foto}>фото</div>
            </div>
        </div>
    )
}