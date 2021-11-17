import {
    GET_ALL_COUNTRIES,
    GET_BY_ID,
    GET_BY_NAME,
    GET_BY_CONTINENT,
    GET_BY_ACTIVITY,
    GET_POP_APLH,
    GET_ACTIVITIES,
    GET_ACT_BY_SEASON
} from './actionsName'
import axios from 'axios'


export function getAllCountries() {
    return async (dispatch) => {
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