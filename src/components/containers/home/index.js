import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../redux/Products/actions'
import ProductCard from '../../cards/product/index'

const HomeGrid = () => {
    const products = useSelector((state) => state.productsReducer.products)
    const dispatch = useDispatch()

    const onLoad = useCallback(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    useEffect(() => {
        onLoad()
    }, [onLoad])

    return (
        <div className="product-grid">
            {products?.map((item, index) => 
            <ProductCard
            key={index}
            name={item.name}
            description={item.description}
            imageCover={item.cover_image}
            price={item.price}
            id={item.id}
            isInCart={item.in_cart}
            productCount={item.count}
            />)}
        </div>
    )
}

export default HomeGrid