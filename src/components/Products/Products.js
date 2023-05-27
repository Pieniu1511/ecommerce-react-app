import { useEffect } from 'react'
import ProductsFilter from './ProductsFilter/ProductsFilter'
import ProductsList from './ProductsList/ProductsList'
import useFetchCollection from '../../customHooks/useFetchCollection'
import { useDispatch, useSelector } from 'react-redux'
import { productsActions, selectProducts } from '../../store/slice/productsSlice'

import classes from './Products.module.css'

function Product() {
	const { data, isLoading } = useFetchCollection('products')

  const products = useSelector(selectProducts)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			productsActions.storeProducts({
				products: data,
			})
		)
	}, [dispatch, data])
  
  return (
    <section>
      <div className={`${classes.productContainer} container`}>
        <aside className={classes.filter}>
          <ProductsFilter />
        </aside>
        <div className={classes.content}>
          <ProductsList products={products} isLoading={isLoading} />
        </div>
      </div>
    </section>
  )
}

export default Product