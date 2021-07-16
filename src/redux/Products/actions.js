import { GET_PRODUCTS } from './types'
import productsService from '../../services/products'

export const getProducts = (products) => ({
        type: GET_PRODUCTS,
        payload: products
})

export const fetchProducts = () => async (dispatch, getState) => {
    const products = await productsService.getProductsFromServer()
    dispatch(getProducts(products))
}