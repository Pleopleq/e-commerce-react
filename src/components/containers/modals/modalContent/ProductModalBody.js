import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DividedLayoutButtons from '../../../buttons/DividedLayoutButtons'
import getModalStyle from '../../../../helpers/getModalStyle'
import { makeStyles } from '@material-ui/core'

const ProductModalBody = ({ name, imageCover, description, price, }) => {
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
          <h2 id="simple-modal-title">{name}</h2>
          <img
              style={{ display: "block", maxWidth: "100%"}}
              alt={`${name} cover`}
              src={imageCover}
              title={`${name} cover`}>
              </img>
          <p id="simple-modal-description">
            {description}
          </p>
          <Typography color="secondary" component="p">Price: ${price}</Typography>
          <DividedLayoutButtons>
              <Button variant="contained" color="secondary">Add to cart</Button>
              <Button variant="contained" color="primary">Add to wishlist</Button>
          </DividedLayoutButtons>
        </div>
    )
}

export default ProductModalBody