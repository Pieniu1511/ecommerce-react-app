import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectEmail } from '../../../store/slice/loginSlice'
import Permission from '../Permission'
import { toast } from 'react-toastify'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../../firebase/config'
import { FadeLoader } from 'react-spinners'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import classes from './ViewProducts.module.css'

function ViewProducts() {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const email = useSelector(selectEmail)

	useEffect(() => {
		getProducts()
	}, [])

	const getProducts = () => {
		setIsLoading(true)

		try {
			setIsLoading(false)
			const productsRef = collection(db, 'products')
			const q = query(productsRef, orderBy('createdAt', 'desc'))

			onSnapshot(q, snapshot => {
				const allProducts = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data(),
				}))
				setProducts(allProducts)
				setIsLoading(false)
			})
		} catch (error) {
			setIsLoading(false)
			toast.error(error.message)
		}
	}

	return (
		<>
			{email !== 'admin@gmail.com' ? (
				<Permission />
			) : (
				<>
					<div className={classes.products}>
						<h2>All Products</h2>
						<div className={`${classes.productsContainer} container`}>
							{isLoading && <FadeLoader color={'#febd69'} className={classes.loader} />}
							{!isLoading && products.length === 0 ? <p>No product found</p> : null}
							{!isLoading && products.length > 0 ? (
								<table>
									<thead>
										<tr>
											<th>s/n</th>
											<th>Image</th>
											<th>Name</th>
											<th>Category</th>
											<th>Price</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										{products.map((product, index) => {
											const { id, name, price, imageUrl, category } = product
											return (
												<tr key={id}>
													<td>{index + 1}</td>
													<td>
														<img src={imageUrl} alt={name} />
													</td>
													<td>{name}</td>
													<td>{category}</td>
													<td>{`$${price}`}</td>
													<td>
														<Link to='/admin/add-product'>
															<FaEdit color='green' size={20} className={classes.action} />
														</Link>
														<FaTrash color='red' size={18} className={classes.action} />
													</td>
												</tr>
											)
										})}
									</tbody>
								</table>
							) : null}
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default ViewProducts
