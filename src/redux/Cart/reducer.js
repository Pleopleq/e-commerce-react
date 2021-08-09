import { ADD_TO_CART, DELETE_FROM_CART } from './types'

const INITIAL_STATE = {
    items: [],
    totalPrice: 0,
}

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:
           return {
             ...state, 
             items: [...payload],
             totalPrice: payload[0].price + state.totalPrice
           }
         default: return state
    }
}

export default cartReducer