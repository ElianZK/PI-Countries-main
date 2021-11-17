import {
    GET_ALL_COUNTRIES,
    GET_BY_ID,
    GET_BY_NAME,
    GET_BY_CONTINENT,
    GET_BY_ACTIVITY,
    GET_POP_APLH,
    GET_ACTIVITIES,
    GET_ACT_BY_SEASON
} from "../actions/actionsName";

//pais y detalle, filtros, actividades

const initialState = {
    countries = [],
    detail = [],
    filters = [],
    activities = []
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        //completar todas las acciones
        case GET_ALL_COUNTRIES:
            return {
                ...state, 
                countries: action.payload,
                filters: action.payload
            };
        case GET_BY_ID:
            
    
        default:
            return state
    }
}