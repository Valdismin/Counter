import {combineReducers, createStore, Store} from "redux";
import {appReducer} from "./AppReducer";

let reducers = combineReducers({
    counter: appReducer
})
export type AllStateType = ReturnType<typeof reducers>
export const store: Store = createStore(reducers)


// @ts-ignore
window.store = store