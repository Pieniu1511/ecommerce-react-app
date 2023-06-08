import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectMaxPrice, selectMinPrice, selectProducts } from '../../../store/slice/productsSlice'
import { filterByBrand, filterByCategory, filterByPrice } from '../../../store/slice/filterSlice'

import classes from './ProductsFilter.module.css'

function ProductsFilter() {
	const [category, setCategory] = useState('All')
	const [brand, setBrand] = useState('All')
	const [maxPrice, setMaxPrice] = useState(null)
	const [minPrice, setMinPrice] = useState(null)

	const products = useSelector(selectProducts)
	const min = useSelector(selectMinPrice)
	const max = useSelector(selectMaxPrice)

	const dispatch = useDispatch()

	const allCategories = ['All', ...new Set(products.map(product => product.category))]
	const allBrands = ['All', ...new Set(products.map(product => product.brand))]

	const filterProducts = cat => {
		setCategory(cat)
		dispatch(filterByCategory({ products, category: cat }))
	}

	const handleBrandChange = event => {
		const selectedBrand = event.target.value
		setBrand(selectedBrand)
		dispatch(filterByBrand({ products, brand: event.target.value }))
	}

	useEffect(() => {
		setMaxPrice(max)
		setMinPrice(min)
	}, [max, min])

	const handlePriceChange = event => {
		const selectedPrice = parseInt(event.target.value)
		setMaxPrice(selectedPrice)
		dispatch(filterByPrice({ products, maxPrice }))
	}

	const clearFilter = () => {
		setCategory('All')
		setBrand('All')
		setMaxPrice(max)
		setMinPrice(min)
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
				<select name='brand' value={brand} onChange={handleBrandChange}>
					{allBrands.map((brnd, index) => (
						<option value={brnd} key={index}>
							{brnd}
						</option>
					))}
				</select>
			</div>
			<h4>Price</h4>
			<p>
				${minPrice} - ${maxPrice}
			</p>
			<div className={classes.price}>
				<input type='range' name='price' min={min} max={max} value={maxPrice || ''} onChange={handlePriceChange} />
			</div>
			<br />
			<button className={classes.clearBtn} onClick={clearFilter}>Clear Filter</button>
		</div>
	)
}

export default ProductsFilter
