import {
    GET_ALL_COUNTRIES,
    COUNTRY_DETAIL,
    COUNTRY_BY_NAME,
    COUNTRY_BY_CONTINENT,
    COUNTRY_BY_ACTIVITY,
    FILTER_POPU_APLH,
    GET_ALL_ACTIVITIES,
    POST_ACTIVITY,
    ACTIVITY_BY_SEASON
} from "./actionsTypes";
import axios from 'axios'


export function getAllCountries() {
    return async function(dispatch){
        try{
            const countries = await axios.get('http://localhost:3001/countries');
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: countries.data
            });
        }catch(err){
            console.log(err)
        }
    }
};

export function countryByName(name) {
    return async function(dispatch){
        try{
            const country = await axios.get(`http://localhost:3001/countries?name=${name}`)
            country.data.length?
            dispatch({
                type: COUNTRY_BY_NAME,
                payload: country.data
            }):alert('Pais no encontrado')
        }catch(err){
            console.log(err)
        }
    }
};

export function countryDetail(id) {
    return async function(dispatch){
        try{
            const details= await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({
                type: COUNTRY_DETAIL,
                payload: details.data
            })
        }catch(err){
            alert('Pais no encontrado')
        }   
    }
};

export function postActivity(payload) {
    return async function (dispatch){
            const newActivity= await axios.post('http://localhost:3001/activity', payload)
            return dispatch({
                type: POST_ACTIVITY,
                payload: newActivity
            })

        }
    }


export function getAllActivities(){
    return async function(dispatch){
        try{
            const activity= await axios.get('http://localhost:3001/activity')
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: activity.data
            })
        }catch(err){
            console.log(err)
        }
    }
};


export function countryByContinent(payload){
    return {
        type: COUNTRY_BY_CONTINENT,
        payload
    }
};

export function countryByActivity(payload){
    return {
        type: COUNTRY_BY_ACTIVITY,
        payload
    }
};

export function activityBySeason(payload){
    return {
        type: ACTIVITY_BY_SEASON,
        payload
    }
};

export function filterPopuAlph(payload){
    return {
        type: FILTER_POPU_APLH,
        payload
    }
};

