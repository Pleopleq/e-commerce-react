import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import SimpleModal from '../../containers/modals';
import DividedButtonsWrapper from '../../buttons/DividedButtonsWrapper';

function getModalStyle() {
  const top = 50 
  const left = 50 

  return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
  }
}

const ProductCard = ({ name, description, imageCover, price, key }) => {
    const [isOpen, setIsOpen] = useState(false)

    
    const useStyles = makeStyles((theme) => ({
      paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
      },
      }));
  
    const classes = useStyles()


  const modalBody = (
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
      <DividedButtonsWrapper>
          <Button variant="contained" color="secondary">Buy it for ${price}</Button>
          <Button variant="contained" color="primary">Add to wishlist</Button>
      </DividedButtonsWrapper>
    </div>
  )
    
    const handleOpenModal = () => {
      setIsOpen(true)
    }

    const handleCloseModal = () => {
      setIsOpen(false)
    }

    return (
      <Card key={key}>
        <CardActionArea onClick={handleOpenModal}>
          <CardMedia
            component="img"
            alt={`${name} cover`}
            height="20%"
            image={imageCover}
            title={`${name} cover`}
          />
          <CardContent >
            <Box whiteSpace="nowrap" overflow="hidden" textOverflow="elipsis">
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="caption" color="textSecondary" component="p">
                {description}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
        <Box display="flex" justifyContent="space-between" m="1rem">
            <Button size="small" color="primary">
              Buy it for {price}
            </Button>
            <Button size="small" color="primary">
              Add to wishlist
            </Button>
          </Box>
          <>
        <SimpleModal handleOpen={isOpen} handleClose={handleCloseModal} body={modalBody}>
        </SimpleModal>
      </>
      </Card>

    )
  }

export default ProductCard