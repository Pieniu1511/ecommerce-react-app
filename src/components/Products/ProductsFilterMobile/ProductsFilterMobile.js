import React from 'react'

import classes from './ProductsFilterMobile.module.css'

function ProductsFilterMobile() {
	return (
		<div className={classes.filter}>
			<h4>Catergories</h4>
			<div className={classes.category}>
				<button>All</button>
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

export default ProductsFilterMobile
