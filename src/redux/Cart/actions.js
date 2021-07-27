import { ADD_TO_CART, DELETE_FROM_CART } from './types'

export const addItemToCart = (items, product) => (dispatch) => { 
    let productAlreadyInCart = items.some((el) => {
        return (el.id === product.id)
    })

    if (productAlreadyInCart) {
        items.filter(item => {
            if (item.id === product.id) {
                item.productCount++
            }
        })
    }

    if (!productAlreadyInCart) {
        items.push({...product, productCount: 1 })
    }

    return dispatch({
        type: ADD_TO_CART,
        payload: items
    })   
}

export const deleteItemFromCart = (item) => ({
    type: DELETE_FROM_CART,
    payload: item
})