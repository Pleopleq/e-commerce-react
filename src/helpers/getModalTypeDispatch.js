import {setLoginModal, setRegisterModal, setProductModal, setClosedModal} from '../redux/Modals/actions'
import { LOGIN_MODAL, REGISTER_MODAL, PRODUCT_MODAL, NO_MODAL } from '../redux/Modals/types'

export default function getModalTypeDispatch(modalType) {
    switch(modalType) {
        case LOGIN_MODAL:
            return setLoginModal
        case REGISTER_MODAL:
            return setRegisterModal
        case PRODUCT_MODAL:
            return setProductModal
        case NO_MODAL:
            return setClosedModal
        default: return ''
    }
}