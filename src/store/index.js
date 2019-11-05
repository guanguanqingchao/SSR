import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import {
    reducer as HomeReducer
} from 'container/Home/store'

import clientInstance from 'src/client/request'
import serverInstance from 'src/server/request'



const reducer = combineReducers({
    home: HomeReducer
})

export const getstore = () => createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverInstance)));

export const getClientStore = () => {
    const defaultState = window.context.state;
    return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientInstance)));
}