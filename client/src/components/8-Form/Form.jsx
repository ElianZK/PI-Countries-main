import {getAllCountries, postActivity} from '../../actions/actions';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import s from './FormStyle.module.css'




export default function ActForm(){
    const dispatch = useDispatch();
    const countries = useSelector(state=> state.countries);
    const [activity, setActivity] = useState({
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
        e.prevertDefault()
        dispatch(postActivity(activity))//postActivity(activity)
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
            <div className={s.container}>
                <div className={s.card}>
                    
                    <form onSubmit={handleSubmit}>

                        <h2 className={s.title}>Add a Tourist Activity</h2>

                        <div className={s.labelContain}>
                            <label className={s.label} htmlFor='name'>Activity Name:   </label>
                            <input
                                className={s.input}
                                onChange={handleChange}
                                value={activity.name}
                                name='name'
                                type='text'
                                placeholder='Insert a name...'
                                >
                            </input><br/>
                        </div>

                        <div className={s.labelContain}>
                            <label className={s.label} htmlFor='season'>Activity Season:   </label>
                            <select 
                                    className={s.input}
                                    onChange={handleChange}
                                    key={activity.season}
                                    value={activity.season}
                                    id='season'
                                    type='text'
                                    name='season'
                                    required='required'>
                                <option value=''>Choose Your Activity Season</option>
                                <option value='Summer'>Summer</option>
                                <option value='Autumn'>Autumn</option>
                                <option value='Winter'>Winter</option>
                                <option value='Spring'>Spring</option>
                            </select><br/>
                        </div>

                        <div className={s.labelContain}>
                            <label>Activity Duration:   </label>
                            <input
                                className={s.input}
                                onChange={handleChange}
                                value={activity.duration}
                                id='duration'
                                type='text'
                                name='duration'
                                placeholder='The activity duration'
                                required='required'>
                            </input><br/>
                        </div>

                        <div className={s.labelContain}>
                            <label className={s.label} htmlFor='difficulty'>Activity Difficulty:   </label>
                            <select 
                                    className={s.input}
                                    onChange={handleChange}
                                    key={activity.difficulty}
                                    value={activity.difficulty}
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
                            </select><br/>
                        </div>

                        <div className={s.labelContain}>
                            <label>Activity Countries:   </label>
                            <select
                                    className={s.input}
                                    onChange={handleSelect}
                                    key={activity.countries}
                                    value={activity.countries}
                                    id='countries'
                                    type='text'
                                    name='countries'
                                    placeholder='Your Activity Country'
                                    required='required'>
                                <option value='All'>Choose Activity Countries</option>
                                {countries.map((c)=> (
                                    <option 
                                    key={c.id} 
                                    value={c.id}>{c.name}</option>
                                ))}
                            </select><br/>
                        </div>
                        <ul>
                            <li>{activity.countries.map((c) => `~${c}~`)}</li>
                        </ul>
                        <Link to='/home'> 
                                    <button>Back</button>
                        </Link>
                        <button type='submit' className={s.create}>Create Activity</button>
                    </form>
                </div>
            </div>
        </>
    )
}

