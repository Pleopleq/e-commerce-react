
import { Box, Toolbar } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'

const Header = () => {
    return (
    <AppBar position="static" >
        <Box display="flex" justifyContent="flex-end">
            <Toolbar >
                <Button color="inherit">Login</Button>
                <Button color="inherit">Register</Button>
            </Toolbar>
        </Box>
    </AppBar>
    )
}

export default Header