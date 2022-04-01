import {ACTIONS} from '../actions/actions'

export const errorReducer = (error, {type, payload}) => {
    switch(type) {
        case ACTIONS.CHANGE:
            return error = payload
        case ACTIONS.RESET:
            return error = payload
        default:
            return error
    }
}