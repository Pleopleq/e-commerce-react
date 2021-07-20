
import { Badge, Box, IconButton, Toolbar } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'

const Header = () => {
    return (
    <AppBar position="static" >
        <Box display="flex" justifyContent="flex-end">
            <Toolbar >
                <IconButton aria-label="cart">
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartIcon ></ShoppingCartIcon>
                    </Badge>
                </IconButton>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Register</Button>
            </Toolbar>
        </Box>
    </AppBar>
    )
}

export default Header