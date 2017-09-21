import {
    path,
    nav_select,
    nav_select_index
} from "./myConst"
import deepmerge from 'deepmerge'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const initialState = {
    nav_select_index: 1,
    animationName: 'fade'
}

function reducers(state = initialState, actions) {

    switch (actions.type) {
        case nav_select:
            return deepmerge(initialState, actions.payload)
            break;
        default :
            return state;
            break;
    }

}

export default createStore(reducers,
    applyMiddleware(
        thunk,
        logger
    ))