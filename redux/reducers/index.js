import { combineReducers } from "redux";
import { reducer } from "./reducer";
import {currentUser} from './currentUserReducer'
const allReducers = combineReducers({
    smurfReducer:reducer,
    currentUserReducer:currentUser 
});

export default allReducers;



