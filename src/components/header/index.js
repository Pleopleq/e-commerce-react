
import { Badge, Box, IconButton, Toolbar } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import SimpleModal from '../containers/modals'
import LoginModalBody from '../containers/modals/modalContent/LoginModalBody'
import RegisterModalBody from '../containers/modals/modalContent/RegisterModalBody'
import useModal from '../../hooks/useModal'
import { useSelector } from 'react-redux'
import { LOGIN_MODAL, REGISTER_MODAL, NO_MODAL } from '../../redux/Modals/types'

const Header = () => {
    const {isOpen, handleOpenModal, handleCloseModal} = useModal()
    const modal = useSelector((state) => state.modalReducer.modal)

    return (
    <AppBar position="static" >
        <Box display="flex" justifyContent="flex-end">
            <Toolbar >
                <IconButton aria-label="cart">
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartIcon ></ShoppingCartIcon>
                    </Badge>
                </IconButton>
                <Button color="inherit" onClick={() => handleOpenModal(LOGIN_MODAL)}>Login</Button>
                <Button color="inherit" onClick={() => handleOpenModal(REGISTER_MODAL)}>Register</Button>
            </Toolbar>
        </Box>
        <>
        <SimpleModal handleOpen={isOpen} handleClose={() => handleCloseModal(NO_MODAL)}>
            <div>
            {modal === LOGIN_MODAL && <LoginModalBody></LoginModalBody>}
            {modal === REGISTER_MODAL && <RegisterModalBody></RegisterModalBody>}
            </div> 
        </SimpleModal>
        </>
    </AppBar>
    )
}

export default Header