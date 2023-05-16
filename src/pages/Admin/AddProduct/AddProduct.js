import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectEmail } from '../../../store/slice/loginSlice'
import Permission from '../Permission'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { db, storage } from '../../../firebase/config'
import { toast } from 'react-toastify'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

import classes from './AddProduct.module.css'

const categories = [
	{ id: 1, name: 'Laptop' },
	{ id: 2, name: 'Electronics' },
	{ id: 3, name: 'Fashion' },
	{ id: 4, name: 'Phone' },
]

const initialState = {
	name: '',
	imageUrl: '',
	price: 0,
	category: '',
	brand: '',
	desc: '',
}

function AddProducts() {
	const [product, setProduct] = useState({
		...initialState,
	})
	const [uploadProgress, setUploadProgress] = useState(0)

	const navigate = useNavigate()

	const email = useSelector(selectEmail)

	const inputChangeHandler = e => {
		const { name, value } = e.target
		setProduct({ ...product, [name]: value })
	}

	const imageChangeHandler = e => {
		const file = e.target.files[0]

		const storageRef = ref(storage, `ecommerce/${Date.now()}${file.name}`)
		const uploadTask = uploadBytesResumable(storageRef, file)

		uploadTask.on(
			'state_changed',
			snapshot => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
				setUploadProgress(progress)
			},
			error => {
				toast.error(error.message)
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
					setProduct({ ...product, imageUrl: downloadURL })
					toast.success('Image uploaded successfully.')
				})
			}
		)
	}

	const addProduct = e => {
		e.preventDefault()

		try {
			addDoc(collection(db, 'products'), {
				name: product.name,
				imageUrl: product.imageUrl,
				price: Number(product.price),
				category: product.category,
				brand: product.brand,
				desc: product.desc,
				createdAt: Timestamp.now().toDate(),
			})
			setUploadProgress(0)
			setProduct({ ...initialState })
			toast.success('Product uploaded successfully.')
			navigate('/admin/view-products')
		} catch (error) {
			toast.error(error.message)
		}
	}

	return (
		<>
			{email !== 'admin@gmail.com' ? (
				<Permission />
			) : (
				<div className={classes.products}>
					<h2>Add New Product</h2>
					<form className={classes.form} onSubmit={addProduct}>
						<label>Product name:</label>
						<input
							type='text'
							name='name'
							placeholder='Product name'
							required
							value={product.name}
							onChange={e => inputChangeHandler(e)}
						/>
						<label>Product image:</label>
						<div className={classes.group}>
							{uploadProgress === 0 ? null : (
								<div className={classes.progress}>
									<div className={classes.progressBar} style={{ width: `${uploadProgress}%` }}>
										<p className={classes.progressBarText}>
											{uploadProgress < 100 ? `Uploading ${uploadProgress}` : `Upload Completed ${uploadProgress}%`}
										</p>
									</div>
								</div>
							)}
							<input
								type='file'
								accept='image/*'
								placeholder='Product Image'
								name='image'
								onChange={e => imageChangeHandler(e)}
							/>
							{product.imageUrl === '' ? null : <input type='text' name='imageUrl' value={product.imageUrl} disabled />}
						</div>
						<label>Product price:</label>
						<input
							type='number'
							name='price'
							placeholder='Product price'
							required
							value={product.price}
							onChange={e => inputChangeHandler(e)}
						/>
						<label>Product category:</label>
						<select name='category' required value={product.category} onChange={e => inputChangeHandler(e)}>
							<option disabled value=''>
								-- choose product category --
							</option>
							{categories.map(cat => {
								return (
									<option key={cat.id} value={cat.name}>
										{cat.name}
									</option>
								)
							})}
						</select>
						<label>Product Company/Brand:</label>
						<input
							type='text'
							name='brand'
							placeholder='Product brand'
							required
							value={product.brand}
							onChange={e => inputChangeHandler(e)}
						/>
						<label>Product Description:</label>
						<textarea
							name='desc'
							value={product.desc}
							onChange={e => inputChangeHandler(e)}
							cols='30'
							rows='10'></textarea>
						<button>Save Product</button>
					</form>
				</div>
			)}
		</>
	)
}

export default AddProducts
