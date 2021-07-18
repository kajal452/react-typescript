import { applyMiddleware, createStore } from "redux";
import reducer, { initialState } from "./Auth.reducer";
import thunk from 'redux-thunk'
const Store = createStore(reducer,initialState);
export default Store;