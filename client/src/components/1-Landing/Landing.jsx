import s from './LandStyle.module.css';
import {Link} from 'react-router-dom';
import React from 'react';


export default function Landing(){
    return (
        <>
        <div>
            <div>
            <Link to='/home'>
                <h2>Countries</h2>
            </Link>
            </div>
        </div>
        </>
    )
}