
import { Badge,
    Box,
    IconButton,
    Toolbar,
    Drawer,
    AppBar,
    Button } 
    from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import SimpleModal from '../containers/modals'
import LoginModalBody from '../containers/modals/modalContent/LoginModalBody'
import RegisterModalBody from '../containers/modals/modalContent/RegisterModalBody'
import useModal from '../../hooks/useModal'
import { useSelector } from 'react-redux'
import { LOGIN_MODAL, REGISTER_MODAL, NO_MODAL } from '../../redux/Modals/types'
import { useState } from 'react'

const Header = () => {
    const {isOpen, handleOpenModal, handleCloseModal} = useModal()
    const [isShoppinCartOpen, setIsShoppingCartOpen] = useState(false)
    const modal = useSelector((state) => state.modalReducer.modal)
    const cartItems = useSelector((state) => state.cartReducer.items)

    return (
    <AppBar position="static" >
        <Box display="flex" justifyContent="flex-end">
            <Toolbar >
                <IconButton aria-label="cart">
                    <Badge badgeContent={cartItems.length} color="secondary">
                        <ShoppingCartIcon onClick={() => setIsShoppingCartOpen(true)}></ShoppingCartIcon>
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
        <>
        <Drawer anchor={'right'} open={isShoppinCartOpen} onClose={() => setIsShoppingCartOpen(false)}>
            <h1>Shopping Cart</h1>
            {cartItems.map((item) => {
               return (
                <div>
                <h2>{item.name} </h2>
                <img src={item.imageCover} alt={`${item.name} cover`}></img>
                <p>{`Amount: ${item.productCount}`} </p>
                </div>
               ) 
            })}
        </Drawer>
        </>
    </AppBar>
    )
}

export default Header