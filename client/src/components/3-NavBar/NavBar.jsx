import React from 'react';
import { Link } from 'react-router-dom';
import s from './NavStyle.module.css';


export default function NavBar(){
    return(
        <>
        <nav >
            <div >
                    <Link to='/'>LANDING</Link>
                    <Link to='/home'>HOME</Link>
                    <Link to='/addActivity'>ADD ACTIVITIES</Link>
                    </div>
        </nav>
        </>
    )
};