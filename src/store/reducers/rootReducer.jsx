import { combineReducers } from 'redux'
import realestateReducer from './realestateReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    realEstate: realestateReducer,
    filter: filterReducer
});

export default rootReducer;