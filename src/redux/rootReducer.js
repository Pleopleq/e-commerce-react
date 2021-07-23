import {combineReducers} from 'redux'
import productsReducer from './Products/reducer'
import modalReducer from './Modals/reducer'
import cartReducer from './Cart/reducer'

const rootReducer = combineReducers({
    cartReducer,
    productsReducer,
    modalReducer,
})

export default rootReducer