import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router';
import React, {useEffect} from 'react';
import {countryDetail} from '../../actions/actions';
import s from './DetailStyle.module.css';
import NavBar from '../3-NavBar/NavBar';
import { Link } from 'react-router-dom';

export default function Detail(){
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch(countryDetail(id));    
    },[dispatch,id]);
    const detail = useSelector((state) => state.detail);
    
    return (
        <>
        {
            detail?(
                <div >
                    <div key={detail.id}></div>
                    <div>
                        <div >
                           <img src={detail.flag} alt="image_flag" />
                        </div>

                        <div >
                            <h2>
                                {detail.name} ~ {detail.id}
                            </h2>
                            <h4 >Continent: {detail.continents} </h4>
                            <h4> Subregion: {detail.subregion ? ' ~ ' + detail.subregion : '---'}</h4>

                            <h4>Capital:  {detail.capital}</h4>
                            <h4>Population:  {detail.population}</h4>
                            <h4>Area:  {detail.area} km²</h4>
                            <h4 >Activities:  </h4>

                            {detail.Activities && 
                                detail.Activities.map((a) => (
                                    <p key={a.id}>
                                        <li>Name: {a.name}</li>
                                        <li>Season: {a.season} </li>
                                        <li>Duration:  {' '} {a.duration} </li>
                                        <li>Difficulty: {a.difficulty} </li>
                                    </p>
                                ))
                            }

                        </div>
                    </div>
                    <Link to='/home'>
                        <button>Home Page</button>
                    </Link>
                </div>
            ):(<span>Country Not Found</span>)
        }
    
 </>
)}
