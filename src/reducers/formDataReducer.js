import {ACTIONS} from '../actions/actions'

export const formDataReducer = (formData, {type, payload}) => {
    switch(type) {
        case ACTIONS.GET:
            return formData = payload
        case ACTIONS.RESET:
            return formData = payload
        default:
            return formData
    }
}