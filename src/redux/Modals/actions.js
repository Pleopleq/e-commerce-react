import { LOGIN_MODAL, REGISTER_MODAL, PRODUCT_MODAL, NO_MODAL } from './types'

export const setLoginModal = (modalType) => ({
    type: LOGIN_MODAL,
    payload: modalType
})

export const setRegisterModal = (modalType) => ({
    type: REGISTER_MODAL,
    payload: modalType
})

export const setProductModal = (modalType) => ({
    type: PRODUCT_MODAL,
    payload: modalType
})

export const setClosedModal = (modalType) => ({
    type: NO_MODAL,
    payload: modalType
})
