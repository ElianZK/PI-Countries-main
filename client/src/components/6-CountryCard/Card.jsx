import s from './CardStyle.module.css';
import {Link} from 'react-router-dom';
import React from 'react';


export default function Card({id, flag, name, continents}){
    return(
        <>
            <div className={s.All}>
            <div className={s.Container} key={id}> 
                <div className={s.ImageContainer}>
                    <img className={s.Image} src={flag} alt='flag' />
                </div>
                <div className={s.TextContainer}>
                    <h1 className={s.Name}>{name}<Link className={s.Link} to={`/countries/${id}`}>({id})</Link></h1>
                    <h2 className={s.Continents}>{continents}</h2>   
                </div>
            </div> 
            </div>
        </>
    )
}