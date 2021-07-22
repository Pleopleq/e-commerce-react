import { LOGIN_MODAL, REGISTER_MODAL, PRODUCT_MODAL, NO_MODAL } from './types'

const INITIAL_STATE = {
    modal: ''
}

const modalReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case LOGIN_MODAL:
            return {
                ...state,
                modal: payload
            }
        case REGISTER_MODAL:
            return {
                ...state,
                modal: payload
            }
        case PRODUCT_MODAL:
            return {
                ...state,
                modal: payload
            }
        case NO_MODAL:
            return {
                ...state,
                modal: payload
            }
        default: return state
    }
}

export default modalReducer