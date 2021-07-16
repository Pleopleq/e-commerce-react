import { GET_PRODUCTS } from './types'

const INITIAL_STATE = {
    products: [],
}

const productsReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case GET_PRODUCTS:
           return {
             ...state, 
             products: payload
           }
         default: return state
    }
}

export default productsReducer;