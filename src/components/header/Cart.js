import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Cart.module.css'

function Cart() {
  return (
    <Link className={classes.cart}>
		<img className={classes.cartImg} src='/images/cart.SVG' alt='cart-icon' />
		<div className={classes.cartAdd}>
			<div className={classes.badge}>2</div>
			<p className={classes.price}>$ 500.00</p>
		</div>
	</Link>
  )
}

export default Cart