import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles'

const PaginationFooter = () => {
const useStyles = makeStyles(theme => ({
    footer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop:'calc(5% + 60px)',
        bottom: 0
    }
    }));

    const classes = useStyles()

    return (
    <Box className={classes.footer}>
        <Pagination count={10} variant="outlined" color="primary" />
    </Box>
    )
}

export default PaginationFooter