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

        case COUNTRY_BY_ID:
            return {
                ...state,
                byId: action.payload,
                    countries: action.payload
            };

        case COUNTRY_BY_NAME:
            return {
                ...state,
                filters: action.payload
            };
        case COUNTRY_BY_CONTINENT:

            const byContinent =
                action.payload === 'All' ?
                state.countries :
                state.countries.filter(
                    co => co.continent === action.payload
                )
            return {
                ...state,
                filters: byContinent,

            };
        case COUNTRY_BY_ACTIVITY:
            const byActivity =
                action.payload === 'All' ?
                state.countries :
                state.countries.filter(
                    co => co.Tourist_Act && co.Tourist_Act.filter(
                        ac => ac.name === action.payload
                    ).length
                )
            return {
                ...state,
                filters: byActivity
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
            /*--------------------activities--------------------*/
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            };

        case POST_ACTIVITY:
            return {
                ...state,

            };

        case COUNTRY_BY_SEASON:
            const bySeason =
                action.payload === 'All' ?
                state.countries :
                state.countries.filter(
                    co => co.activities && co.activities.filter(
                        act => act.season === action.payload
                    ).lenght
                )
            return {
                ...state,
                filters: bySeason
            };
            /*------------------filters-------------------------*/

            /*------------------by id---------------------------*/


        default:
            return state
    }
}