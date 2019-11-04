import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import {
    reducer as HomeReducer
} from 'container/Home/store'



const reducer = combineReducers({
    home: HomeReducer
})

export const getstore = () => createStore(reducer, applyMiddleware(thunk));

export const getClientStore = () => {
    const defaultState = window.context.state;
    return createStore(reducer, defaultState, applyMiddleware(thunk));
}