import {ACTIONS} from '../actions/actions'

export const cartItemsReducer = (cartItems, {type, payload}) => {
    switch(type) {
        case ACTIONS.SET:
            return cartItems = payload
        case ACTIONS.CHANGE:
            return cartItems = payload
        case ACTIONS.RESET:
            return cartItems = payload
        default:
            return cartItems
    }
}