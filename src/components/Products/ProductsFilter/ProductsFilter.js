import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectProducts } from '../../../store/slice/productsSlice'
import { filterByCategory } from '../../../store/slice/filterSlice'

import classes from './ProductsFilter.module.css'

function ProductsFilter() {
	const [category, setCategory] = useState('All')

	const products = useSelector(selectProducts)

	const dispatch = useDispatch()

	const allCategories = ['All', ...new Set(products.map(product => product.category))]

	const filterProducts = cat => {
		setCategory(cat)
		dispatch(filterByCategory({ products, category: cat }))
	}

	return (
		<div className={classes.filter}>
			<h4>Catergories</h4>
			<div className={classes.category}>
				{allCategories.map((cat, index) => (
					<button
						key={index}
						type='button'
						className={category === cat ? classes.active : ''}
						onClick={() => filterProducts(cat)}>
						{cat}
					</button>
				))}
			</div>
			<h4>Brand</h4>
			<div className={classes.brand}>
				<select name='brand'>
					<option value='all'>All</option>
				</select>
			</div>
			<h4>Price</h4>
			<p>$1500</p>
			<div className={classes.price}>
				<input type='range' name='price' min={100} max={1000} />
			</div>
			<br />
			<button className={classes.clearBtn}>Clear Filter</button>
		</div>
	)
}

export default ProductsFilter
