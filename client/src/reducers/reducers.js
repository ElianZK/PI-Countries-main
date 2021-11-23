import {
    FILTER_ACT_BY_SEASON,
    FILTER_BY_CONTINENT,
    GET_ALL_ACTIVITIES,
    FILTER_BY_ACTIVITY,
    GET_ALL_COUNTRIES,
    FILTER_POPU_APLH,
    GET_BY_NAME,
    GET_BY_ID
} from "../actions/actionsName";

const initialState = {
    activities: [],
    countries: [],
    filters: [],
    byId: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
/*------------------countries-----------------------*/
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                filters: action.payload
            };

        case GET_BY_NAME:
            return {
                ...state,
                countries: action.payload
            };
        case FILTER_BY_CONTINENT:

            const byContinent =
                action.payload === 'All'?
                state.countries:
                state.countries.filter(
                    co => co.continent === action.payload
                )
            return {
                ...state,
                filters: byContinent,

            };
        case FILTER_BY_ACTIVITY:
            const byActivity =
                action.payload === 'All' ?
                state.countries :
                state.countries.filter(
                    co => co.activities && co.activities.filter(
                        ac => ac.name === action.payload
                    ).length
                )
            return {
                ...state,
                filters: byActivity
            };
/*--------------------activities--------------------*/
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            };
        case FILTER_ACT_BY_SEASON:
            const bySeason =
                action.payload === 'All' ?
                state.activities :
                state.activities.filter(
                    co => co.activities && co.activities.filter(
                    act => act.season === action.payload
                    ).lenght
                )
            return {
                ...state,
                filters: bySeason
            };
/*------------------filters-------------------------*/
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
                    return a.population - b.population;
                })
            }
            if (action.payload === 'MAX-MIN') {
                order = state.filters.sort((a, b) => {
                    return b.population - a.population;
                })
            }
            return {
                ...state,
                filters: order
            };
/*------------------by id---------------------------*/
        case GET_BY_ID:
            return {
                ...state,
                byId: action.payload,
                countries: action.payload
            };

        default:
            return state
    }
}