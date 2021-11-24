import {
    GET_ALL_COUNTRIES,
    COUNTRY_BY_ID,
    COUNTRY_BY_NAME,
    COUNTRY_BY_CONTINENT,
    COUNTRY_BY_ACTIVITY,
    FILTER_POPU_APLH,
    GET_ALL_ACTIVITIES,
    POST_ACTIVITY,
    COUNTRY_BY_SEASON
} from './actionsName'
import axios from 'axios'


export function getAllCountries() {
    return async function(dispatch){
        try {
            const getCountries = await axios.get('http://localhost:3001/countries')
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: getCountries.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getById(id) {
    return async function(dispatch) {
        try {
            const byId = await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({
                type: COUNTRY_BY_ID,
                payload: byId.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getByName(name) {
    return async function(dispatch){
        try {
            const byName = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: COUNTRY_BY_NAME,
                payload: byName.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getByContinent(payload) {
    return {
        type: COUNTRY_BY_CONTINENT,
        payload
    }

}

export function getByActivity(payload) {
    return {
        type: COUNTRY_BY_ACTIVITY,
        payload
    }
}

export function getPopuAlph(payload) {
    return {
        type: FILTER_POPU_APLH,
        payload
    }

}

export function getAllActivities(payload){
    return async function(dispatch) {
        const getActivity = await axios.get('http://localhost:3001/activity',payload)
        return dispatch({
            type: GET_ALL_ACTIVITIES,
            payload: getActivity.data
        })
    }
}

export function postActivity(payload) {
    return async function (dispatch){
            const newActivity= await axios.post('http://localhost:3001/activity', payload)
            return dispatch({
                type: POST_ACTIVITY,
                payload: newActivity
            })
        }
    }

export function getActBySeason(payload) {
            return {
                type: COUNTRY_BY_SEASON,
                payload
            }
}