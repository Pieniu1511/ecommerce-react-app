import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmail } from '../../../store/slice/loginSlice'
import Permission from '../Permission'
import { toast } from 'react-toastify'
import { deleteDoc, doc } from 'firebase/firestore'
import { db, storage } from '../../../firebase/config'
import { FadeLoader } from 'react-spinners'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { deleteObject, ref } from 'firebase/storage'
import ConfirmDelete from './ConfirmDelete'
import { popupActions } from '../../../store/slice/popupSlice'
import { productsActions, selectProducts } from '../../../store/slice/productsSlice'
import useFetchCollection from '../../../customHooks/useFetchCollection'

import classes from './ViewProducts.module.css'

function ViewProducts() {
	const { data, isLoading } = useFetchCollection('products')
	const [tempID, setTempId] = useState('')
	const [tempImageUrl, setTempImageUrl] = useState('')

	const email = useSelector(selectEmail)
	const confirm = useSelector(state => state.popup.showConfirm)
	const products = useSelector(selectProducts)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			productsActions.storeProducts({
				products: data,
			})
		)
	}, [dispatch, data])

	const confirmDeleteHandler = (id, imageUrl) => {
		dispatch(popupActions.openConfrim())
		setTempId(id)
		setTempImageUrl(imageUrl)
	}

	const deleteProductHandler = async (id, imageUrl) => {
		try {
			dispatch(popupActions.closeConfirm())
			await deleteDoc(doc(db, 'products', id))

			const storageRef = ref(storage, imageUrl)
			await deleteObject(storageRef)
			toast.success('Product deleted successfully.')
		} catch (error) {
			dispatch(popupActions.closeConfirm())
			toast.error(error.message)
		}
	}

	return (
		<>
			{email !== 'admin@gmail.com' ? (
				<Permission />
			) : (
				<>
					{confirm && (
						<ConfirmDelete
							onDelete={deleteProductHandler}
							onClose={confirmDeleteHandler}
							id={tempID}
							imageUrl={tempImageUrl}
						/>
					)}
					<div className={classes.products}>
						<h2>All Products</h2>
						{isLoading ? (
							<FadeLoader color={'#febd69'} className='loader' />
						) : (
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
															<Link to={`/admin/add-product/${id}`}>
																<FaEdit color='green' size={20} className={classes.action} />
															</Link>
															<FaTrash
																color='red'
																size={18}
																className={classes.action}
																onClick={() => confirmDeleteHandler(id, imageUrl)}
															/>
														</td>
													</tr>
												)
											})}
										</tbody>
									</table>
								) : null}
							</div>
						)}
					</div>
				</>
			)}
		</>
	)
}

export default ViewProducts
