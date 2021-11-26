import {getAllCountries, postActivity} from '../../actions/actions';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import s from './FormStyle.module.css'


export default function Form(){
    const dispatch = useDispatch();
    const countries = useSelector(state=> state.countries);
    const [activity, setActivity] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season:'',
        countries:[]
    })
    const [error, setError] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season:'',
        countries:[]
    })

    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch])

    function handleSubmit(e){
        dispatch(postActivity(activity))
        setActivity({
            name: '',
            difficulty: '',
            duration: '',
            season:'',
            countries:[]
        })
        alert('Activity Created Succesfuly')
    }
    function handleChange(e){
        let name= e.target.name;
        let value= e.target.value;
        if(value==""){
            setError({...error,[name]:'No se admite campo vacio'})
        }else if((name==="name" || name==="season")&& /\d/.test(value)){
            setError({...error,[name]:'Solo se admiten letras'})
        }else if(name!="season" && name!="name" && isNaN(value))
            setError({...error,[name]:'Solo se admiten numeros'})
        setActivity({
            ...activity,
            [e.target.name] : e.target.value,
        })
    }

    function handleSelect(e){

        setActivity({
            ...activity,
            countries:[...activity.countries, e.target.value]
        })
    }

    return (
        <>
            <section className={s.Background}>
                
                <form className={s.Card}>

                    <h2 className={s.Title}>ADD A TOURIST ACTIVITY</h2>
                    <div >
                        <label  htmlFor='name'>Activity Name:   </label>
                        <input
                            onChange={handleChange}
                            value={activity.name}
                            name='name'
                            type='text'
                            placeholder='Insert a name...'
                            >
                        </input>
                        <br></br>
                    </div>

                    <div >
                        <label  htmlFor='season'>Activity Season:   </label>
                        <select    
                                onChange={handleChange}
                                key={activity.season}
                                // value={activity.season}
                                id='season'
                                type='text'
                                name='season'
                                required='required'>
                            <option value=''>Choose Your Activity Season</option>
                            <option value='Summer'>Summer</option>
                            <option value='Autumn'>Autumn</option>
                            <option value='Winter'>Winter</option>
                            <option value='Spring'>Spring</option>
                        </select>
                        <br></br>
                    </div>

                    <div>
                        <label>Activity Duration:   </label>
                        <input
                            onChange={handleChange}
                            value={activity.duration}
                            id='duration'
                            type='text'
                            name='duration'
                            placeholder='The activity duration'
                            required='required'>
                        </input>
                        <br></br>
                    </div>

                    <div>
                        <label  htmlFor='difficulty'>Activity Difficulty:   </label>
                        <select 
                                onChange={handleChange}
                                key={activity.difficulty}
                                // value={activity.difficulty}
                                id='difficulty'
                                type='text'
                                name='difficulty'
                                required='required'>
                            <option value=''>Choose the Activity Difficulty</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                        <br></br>
                    </div>

                    <div>
                        <label>Activity Countries:   </label>
                        <select
                                onChange={handleSelect}
                                key={activity.countries}
                                // value={activity.countries}
                                id='countries'
                                type='text'
                                name='countries'
                                placeholder='Your Activity Country'
                                required='required'>
                                    {console.log(countries)}
                            <option value='All'>Choose Activity Countries</option>

                            {countries.map((c)=> (
                                <option 
                                key={c.id} 
                                value={c.id}>{c.name}
                                </option>
                            ))}
                        </select>
                        <br></br>
                    </div>
                    <ul>
                        <li className={s.IdCountries}>
                            {activity.countries.map((c) => `~${c}`)}
                        </li>
                    </ul>
                    <div className={s.ButtonContainer}>
                        <Link to='/home'> 
                            <button>Back to Home</button>
                        </Link>
                        {(error.name || error.season)?<span>Se ha detectado un error</span>:null}
                        <button onClick={handleSubmit}>Add Activity</button>
                    </div>
                </form>
            </section>
        </>
    )
}