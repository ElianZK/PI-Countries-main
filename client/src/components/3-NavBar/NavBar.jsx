import React from 'react';
import { Link } from 'react-router-dom';
import s from './NavStyle.module.css';


export default function NavBar(){
    return(
        <>
            <nav className={s.Container}>
                <div className={s.Buttons}>
                    <Link className={s.Link} to='/'>LANDING PAGE</Link>
                    <Link className={s.Link} to='/home'>HOME PAGE</Link>
                    <Link className={s.Link} to='/postActivity'>ADD TOURIST ACTIVITIES</Link>
                </div>
            </nav>
        </>
    )
};