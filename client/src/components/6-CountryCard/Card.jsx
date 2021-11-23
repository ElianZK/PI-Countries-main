import s from './CardStyle.module.css';
import {Link} from 'react-router-dom';
import React from 'react';


export default function Card({id, flags, name, continents}){
    return(
        <>
            <div className={s.card} key={id}> 
                <div className={s.image_container}>
                    <img className={s.image} src={flags} alt='flag' />
                </div>
                <div className={s.text_container}>
                    <Link  className={s.link} to={`/countries/${id}`}>{id}</Link>
                    <h1 className={s.country}> ~ {name} ~ </h1>
                    <h2 className={s.continents}>{continents}</h2>   
                </div>
            </div> 
        </>
    )
}