import {combineReducers} from 'redux'
import productsReducer from './Products/reducer'
import modalReducer from './Modals/reducer'

const rootReducer = combineReducers({
    productsReducer,
    modalReducer
})

export default rootReducer