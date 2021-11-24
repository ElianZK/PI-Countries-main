import s from './CardStyle.module.css';
import {Link} from 'react-router-dom';
import React from 'react';


export default function Card({id, flags, name, continents}){
    return(
        <>
            <div key={id}> 
                <div >
                    <img src={flags} alt='flag' />
                </div>
                <div >
                    <Link to={`/countries/${id}`}>{id}</Link>
                    <h1 >  {name}  </h1>
                    <h2 >{continents}</h2>   
                </div>
            </div> 
        </>
    )
}