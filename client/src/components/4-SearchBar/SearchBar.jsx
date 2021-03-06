import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {countryByName} from '../../actions/actions';
import s from './SearchStyle.module.css';


export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    function handleChange(e){
        e.preventDefault()
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(countryByName(name))
        setName('')
    }
    return(
        <>
            <div className={s.Container}>
                <input onChange={(e)=> handleChange(e)}
                placeholder='Country´s Name...'
                value={name}
                type='text'
                />
                <button onClick={(e)=> handleSubmit(e)}
                    type='submit'>
                    Search
                </button>
            </div>
        </>
    )
}