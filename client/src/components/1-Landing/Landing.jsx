import s from './LandStyle.module.css';
import {Link} from 'react-router-dom';
import React from 'react';


export default function Landing(){
    return (
        <>
            <div className={s.BackGround}>
                <div className={s.Container}>
                    <Link to='/home' classname={s.Button}>
                        <h2 className={s.Text}>Pi-Countries</h2>
                    </Link>
                </div>
            </div>
        </>
    )
}