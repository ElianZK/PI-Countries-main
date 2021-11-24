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
} from "../actions/actionsTypes";

const initialState = {
    activities: [],
    countries: [],
    filters: [],
    detail: []
}

function rootReducer(state = initialState, action){   //action contiene {type, payload}
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                filters: action.payload
            };
        
        case COUNTRY_BY_NAME:
            return {
                ...state,
                filters: action.payload
            };

        case COUNTRY_DETAIL:
            return {
                ...state,
                countries: action.payload,
                detail: action.payload
            };

        case POST_ACTIVITY:
            return {
                ...state,
            };   
        
            
        
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            };   

        case COUNTRY_BY_CONTINENT:
            const filteredContinent= action.payload === 'All'
            ? state.countries
            : state.countries.filter((c) => c.continents === action.payload)
            return {
                ...state,
                filters: filteredContinent
            };

        case COUNTRY_BY_ACTIVITY:
            const filteredActivity = action.payload === 'All'
            ? state.countries
            : state.countries.filter((c) => c.Activities && c.Activities.filter((a)=>
            a.name === action.payload).length)
            console.log(filteredActivity)
            return {
                ...state,
                filters: filteredActivity
            };

        case ACTIVITY_BY_SEASON:
            const filteredActBySeason = action.payload === 'All'? 
            state.countries: 
            state.countries.filter((c) => c.Activities && c.Activities.filter((a)=>
            a.season === action.payload).length)  
            return {
                ...state,
                filters: filteredActBySeason
            }
            
        case FILTER_POPU_APLH:
           let sorts;
            if(action.payload === 'All') sorts=  state.countries;
            if(action.payload === 'A-Z'){  //alpha
                 sorts = state.filters.sort((a,b) => {
                    if(a.name > b.name) return 1;
                    if(a.name < b.name) return -1;
                    return 0;
                })
            }
            if(action.payload === 'Z-A'){
               sorts = state.filters.sort((a,b) => {
                    if(a.name < b.name) return 1;
                    if(a.name > b.name) return -1;
                    return 0;
                })
            }
            if(action.payload === 'ASC'){  //num
                 sorts = state.filters.sort((a,b) => {
                    return   a.population - b.population;
                })      
            }
            if(action.payload === 'DESC'){
                sorts = state.filters.sort((a,b) => {
                  return  b.population - a.population;
                })      
            }
            return {
                ...state,
                filters: sorts
            };

        default:
            return state;
    }
};

export default rootReducer