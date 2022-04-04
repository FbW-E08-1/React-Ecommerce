import {ACTIONS} from '../actions/actions'

export const cartItemsReducer = (cartItems, {type, payload}) => {
    switch(type) {
        case ACTIONS.SET:
            return payload
        case ACTIONS.CHANGE:
            return payload
        case ACTIONS.RESET:
            return payload
        default:
            return cartItems
    }
}