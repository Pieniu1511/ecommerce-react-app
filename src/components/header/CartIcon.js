import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { calculateSubtotal, calculateTotalQuantity, selectCartItems, selectCartTotalAmount, selectCartTotalQuantity } from '../../store/slice/cartSlice'

import classes from './CartIcon.module.css'

function CartIcon() {
	const totalQuantity = useSelector(selectCartTotalQuantity)
	const totalAmount = useSelector(selectCartTotalAmount)
	const cartItems = useSelector(selectCartItems)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(calculateSubtotal())
		dispatch(calculateTotalQuantity())		
	}, [dispatch, cartItems])

	return (
		<Link className={classes.cart} to="cart">
			<img className={classes.cartImg} src='/images/cart.SVG' alt='cart-icon' />
			<div className={classes.cartAdd}>
				<div className={classes.badge}>{totalQuantity}</div>
				<p className={classes.price}>{`$ ${totalAmount}`}</p>
			</div>
		</Link>
	)
}

export default CartIcon
