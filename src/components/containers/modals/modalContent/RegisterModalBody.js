import Button from '@material-ui/core/Button'
import { makeStyles, TextField } from '@material-ui/core'
import getModalStyle from '../../../../helpers/getModalStyle'

const RegisterModalBody = () => {
  const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        fontFamily: theme.typography.fontFamily
    },
    }))

  const classes = useStyles()

    return (
        <div style={getModalStyle()} className={classes.paper}>
            <h1>Register</h1>
            <form noValidate autoComplete="off">
                <TextField
                    label="Username"
                    type="username"
                    autoComplete="current-username"
                />
                <TextField
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <TextField
                    label="Email"
                    type="email"
                    autoComplete="current-email"
                />
            </form>
            <Button variant="contained" color="primary">Submit</Button>
        </div>
    )
}

export default RegisterModalBody