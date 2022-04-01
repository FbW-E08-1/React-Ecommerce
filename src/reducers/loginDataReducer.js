import {ACTIONS} from '../actions/actions'

export const loginDataReducer = (loginData, {type, payload}) => {
    switch(type) {
        case ACTIONS.CHANGE:
            return loginData = payload
        case ACTIONS.RESET:
            return loginData = payload
        default:
            return loginData
    }
}