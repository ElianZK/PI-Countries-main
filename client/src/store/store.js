import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/reducers';
import  thunkMiddleware  from 'redux-thunk';


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)


export default store;