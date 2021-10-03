import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import DigimonsReducer from "./modules/digimons/reducer";


const reducers = combineReducers({digimons: DigimonsReducer});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;