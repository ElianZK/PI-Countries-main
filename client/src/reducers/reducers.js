import {
    GET_ALL_COUNTRIES,
    GET_BY_ID,
    GET_BY_NAME,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
    FILTER_POPU_APLH,
    GET_ALL_ACTIVITIES,
    FILTER_ACT_BY_SEASON
} from "../actions/actionsName";

//pais y detalle, filtros, actividades

const initialState = {
    countries = [],
    byId = [],
    filters = [],
    activities = []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        //completar todas las acciones
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                filters: action.payload
            };
        case GET_BY_ID:
            return {
                ...state,
                byId: action.payload,
                countries: action.payload
            };

        case GET_BY_NAME:
            return {
                ...state,
                countries: action.payload
            };

        case FILTER_BY_CONTINENT:

            const byContinent =
                action.payload === 'All' ?
                state.countries :
                state.countries.filter(p => p.continents === action.payload)

            return {
                ...state,
                filters: byContinent,
                    // filters: action.payload
            };

        case FILTER_BY_ACTIVITY:
            const byActivity =
                action.payload === 'All' ?
                state.activities :
                state.activities.filter(a => a.name === action.payload)
            return {
                ...state,
                filter: byActivity
            };

        case FILTER_POPU_APLH:
            let order;
            if (action.payload === 'All') order = state.countries;
            if (action.payload === 'A-Z') {
                order = state.filters.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                })
            }
            if (action.payload === 'Z-A') {
                order = state.filters.sort((a, b) => {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                })
            }
            if (action.payload === 'MIN-MAX') {
                order = state.filters.sort((a, b) => {
                    return a.pupulation - b.population;
                })
            }
            if (action.payload === 'MAX-MIN') {
                order = state.filters.sort((a, b) => {
                    return b.pupulation - a.population;
                })
            }
            return {
                ...state,
                filters: order
            };

        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            };

        case FILTER_ACT_BY_SEASON:
            const bySeason =
                action.payload === 'All' ?
                state.activities :
                state.activities.filter(a => a.season === action.payload)
            return {
                ...state,
                filters: action.bySeason
            };

        default:
            return state
    }
}