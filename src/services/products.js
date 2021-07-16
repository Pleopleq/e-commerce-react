import axios from 'axios'
const baseURL = 'http://localhost:3001/api/products'
const productsService = {}

productsService.getProductsFromServer = async () => {
    try {
        const response = await axios.get(baseURL)
        return response.data
    } catch(error) {
        console.error(error)
    }
}

export default productsService
