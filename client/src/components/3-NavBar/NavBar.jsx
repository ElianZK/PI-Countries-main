import React from 'react';
import { Link } from 'react-router-dom';
import s from './NavStyle.module.css';


export default function NavBar(){
    return(
        <>
            <nav>
                <div>
                    <Link to='/'>LANDING PAGE</Link>
                    <Link to='/home'>HOME PAGE</Link>
                    <Link to='/postActivity'>ADD TOURIST ACTIVITIES</Link>
                </div>
            </nav>
        </>
    )
};