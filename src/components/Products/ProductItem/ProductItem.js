import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import classes from './ProductItem.module.css'
import { addToCart } from '../../../store/slice/cartSlice'

function ProductItem({ product, grid, id, name, price, desc, imageUrl }) {
	const shortenText = (text, n) => {
		if (text.length > n) {
			const shortenedText = text.substring(0, n).concat('...')

			return shortenedText
		}
		return text
	}

	const dispatch = useDispatch()
	
	const addToCartHandler = (product) => {
		dispatch(addToCart(product))
	}

	return (
		<div className={grid ? `${classes.grid}` : `${classes.list}`}>
			<Link to={`product-detail/${id}`}>
				<div className={classes.img}>
					<img src={imageUrl} alt={name} />
				</div>
			</Link>
			<div className={classes.content}>
				<div className={classes.details}>
					<p>{`$${price}`}</p>
					<h4>{shortenText(name, 18)}</h4>
				</div>
				{!grid && <p className={classes.description}>{shortenText(desc, 200)}</p>}
				<button className={classes.btn} onClick={() => addToCartHandler(product)}>
					Add To Cart
				</button>
			</div>
		</div>
	)
}

export default ProductItem
