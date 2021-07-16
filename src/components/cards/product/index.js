import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const ProductCard = ({name, description, imageCover, price, key}) => {
    return (
      <Card key={key}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={`${name} cover`}
            height="140"
            image={imageCover}
            title={`${name} cover`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box display="flex" justifyContent="space-between" m="1rem">
            <Button size="small" color="primary">
                Buy it for {price}
            </Button>
            <Button size="small" color="primary">
                Add to favorite
            </Button>
          </Box>
      </Card>
    )
  }

export default ProductCard