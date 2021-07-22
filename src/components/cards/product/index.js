import 
{ Box, 
  Typography, 
  Button, 
  CardMedia, 
  CardContent, 
  CardActionArea, 
  Card } from '@material-ui/core'
import SimpleModal from '../../containers/modals'
import ProductModalBody from '../../containers/modals/modalContent/ProductModalBody'
import useModal from '../../../hooks/useModal'
import { PRODUCT_MODAL, NO_MODAL } from '../../../redux/Modals/types'

const ProductCard = ({ name, description, imageCover, price, key }) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal()

    return (
      <Card key={key}>
        <CardActionArea onClick={() => handleOpenModal(PRODUCT_MODAL)}>
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
              <Typography color="secondary" component="p">Price: ${price}</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
        <Box display="flex" justifyContent="space-between" m="1rem">
            <Button size="small" color="primary">
              Add to cart
            </Button>
            <Button size="small" color="primary">
              Add to wishlist
            </Button>
          </Box>
        <>
        <SimpleModal handleOpen={isOpen} handleClose={() => handleCloseModal(NO_MODAL)}>
          <ProductModalBody
          name={name}
          imageCover={imageCover}
          description={description}
          price={price}
          ></ProductModalBody>
        </SimpleModal>
        </>
      </Card>
    )
  }

export default ProductCard