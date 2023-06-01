import { useEffect, useState } from 'react'
import ProductsFilter from './ProductsFilter/ProductsFilter'
import ProductsList from './ProductsList/ProductsList'
import useFetchCollection from '../../customHooks/useFetchCollection'
import { useDispatch, useSelector } from 'react-redux'
import { productsActions, selectProducts } from '../../store/slice/productsSlice'

import classes from './Products.module.css'
import ProductsFilterMobile from './ProductsFilterMobile/ProductsFilterMobile'

function Product() {
	const { data, isLoading } = useFetchCollection('products')

  const [filterMobileIsShown, setFilterMobileIsShown] = useState(false)

  const products = useSelector(selectProducts)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			productsActions.storeProducts({
				products: data,
			})
		)
	}, [dispatch, data])

  const showFilterMobileHandler = () => {
    setFilterMobileIsShown(!filterMobileIsShown)
  }
  
  return (
    <section>
      <div className={`${classes.productContainer} container`}>
        {filterMobileIsShown && <ProductsFilterMobile />}
        <aside className={classes.filter}>
          <ProductsFilter />
        </aside>
        <div className={classes.content}>
          <ProductsList products={products} isLoading={isLoading} onShowFilter={showFilterMobileHandler} filterIsShown={filterMobileIsShown} />
        </div>
      </div>
    </section>
  )
}

export default Product