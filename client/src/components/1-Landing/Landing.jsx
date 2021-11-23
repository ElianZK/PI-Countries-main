import s from './LandStyle.module.css';
import {Link} from 'react-router-dom';
import React from 'react';


export default function LandingPage(){
    return (
        <>
        <div className={s.container}>
            <div className={s.textContainer}>
            <Link to='/home'>
                <h2 className={s.title}>Countries</h2>
                {/* <button className={s.btn}>ENTER</button> */}
            </Link>
            </div>
        </div>
        </>
    )
}