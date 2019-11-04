import {
    CHANGE_HOME_LIST
} from './constant'

const defaultState = {
    name: 'Home name',
    newsList: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_HOME_LIST:
            return {
                ...state, newsList: action.data
            }
            default:
                return state
    }

}