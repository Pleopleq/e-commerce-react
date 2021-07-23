import { ADD_TO_CART, DELETE_FROM_CART } from './types'

export const addItemToCart = (items, product) => (dispatch) => {   
    console.log(items)
    console.log(product)
    if (product.isInCart === false) {
        items.push({...product })
        product.isInCart = true
    }
    console.log(items)
    return dispatch({
        type: ADD_TO_CART,
        payload: items
    })
}

export const deleteItemFromCart = (item) => ({
    type: DELETE_FROM_CART,
    payload: item
})