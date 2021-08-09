
import {
    Box,
 } from '@material-ui/core'
const ShoppingCartBody = ({name, imageCover, productCount, price}) => {
    return (
        <Box fontFamily="fontFamily" display="flex" flexDirection="column" alignItems="center">
            <h2>{name} </h2>
            <img src={imageCover} width={'50%'} alt={`${name} cover`}></img>
            <p>{`Amount: ${productCount}`} </p>
            <p>{`Price: $${productCount * price}`} </p>
        </Box>
    )
}

export default ShoppingCartBody