import {
    GET_ALL_COUNTRIES,
    GET_BY_ID,
    GET_BY_NAME,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
    FILTER_POPU_APLH,
    GET_ALL_ACTIVITIES,
    POST_ACTIVITY,
    FILTER_ACT_BY_SEASON
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
                type: GET_BY_ID,
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
                type: GET_BY_NAME,
                payload: byName.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postActivity(payload) {
    return async function(dispatch) {
            const postActivity = await axios.post('http://localhost:3001/activity',payload)
            return dispatch({
                type: POST_ACTIVITY,
                payload: postActivity
            })
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

export function getByContinent(payload) {
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }

}

export function getByActivity(payload) {
    return {
        type: FILTER_BY_ACTIVITY,
        payload
    }
}

export function getPopuAlph(payload) {
    return {
        type: FILTER_POPU_APLH,
        payload
    }

}

export function getActBySeason(payload) {
            return {
                type: FILTER_ACT_BY_SEASON,
                payload
            }
}