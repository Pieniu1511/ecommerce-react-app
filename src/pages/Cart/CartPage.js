import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	addToCart,
	calculateSubtotal,
	calculateTotalQuantity,
	clearCart,
	deleteFromCart,
	removeFromCart,
	selectCartItems,
	selectCartTotalAmount,
	selectCartTotalQuantity,
} from '../../store/slice/cartSlice'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'

import classes from './CartPage.module.css'

function CartPage() {
	const cartItems = useSelector(selectCartItems)
	const cartTotalAmount = useSelector(selectCartTotalAmount)
	const cartTotalQuantity = useSelector(selectCartTotalQuantity)

	const dispatch = useDispatch()

	const increaseCart = cart => {
		dispatch(addToCart(cart))
	}
	const decreaseCart = cart => {
		dispatch(removeFromCart(cart))
	}

  const deleteItemHandler = (cart) => {
    dispatch(deleteFromCart(cart))
  }

  const clearCartHandler = () => {
    dispatch(clearCart())
  }

  useEffect(() => {
    dispatch(calculateSubtotal())
    dispatch(calculateTotalQuantity())
  }, [dispatch, cartItems])

	return (
		<section>
			<div className={`container ${classes.table}`}>
				<h2>Shoping Cart</h2>
				{cartItems.length === 0 ? (
					<>
						<p>Your cart is currently empty</p>
						<br />
						<div>
							<Link to='/#products'>&larr; Continue Shopping</Link>
						</div>
					</>
				) : (
					<>
						<table>
							<thead className={classes.tableTop}>
								<tr>
									<th>s/n</th>
									<th>Product</th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Total</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody className={classes.tableBottom}>
								{cartItems.map((cart, index) => {
									const { id, name, price, imageUrl, cartQuantity } = cart
									return (
										<tr key={id}>
											<td>{index + 1}</td>
											<td className={classes.productName}>
												<p>
													<b>{name}</b>
												</p>
												<img src={imageUrl} alt={name} />
											</td>
											<td>{`$${price}`}</td>
											<td>
												<div className={classes.count}>
													<button className={classes.countBtn} onClick={() => decreaseCart(cart)}>
														-
													</button>
													<p>
														<b>{cartQuantity}</b>
													</p>
													<button className={classes.countBtn} onClick={() => increaseCart(cart)}>
														+
													</button>
												</div>
											</td>
											<td>{`$${price * cartQuantity}`}</td>
											<td className={classes.icons}>
												<FaTrashAlt size={19} color='red' className={classes.icon} onClick={() => deleteItemHandler(cart)} />
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
						<div className={classes.summary}>
							<button className={classes.clearBtn} onClick={() => clearCartHandler()}>Clear Cart</button>
							<div className={classes.checkout}>
								<div>
									<Link to='/#products'>&larr; Continue Shopping</Link>
								</div>
								<br />
								<div className={classes.card}>
									<p>{`Cart item(s): ${cartTotalQuantity}`}</p>
									<div className={classes.text}>
										<h4>Subtotal</h4>
										<h3>{`$${cartTotalAmount.toFixed(2)}`}</h3>
									</div>
									<p>Tax and shipping calculated at checkout</p>
									<button className={classes.checkoutBtn}>Checkout</button>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</section>
	)
}

export default CartPage
