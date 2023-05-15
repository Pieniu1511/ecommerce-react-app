import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectEmail } from '../../../store/slice/loginSlice'
import Permission from '../Permission'

import classes from './AddProduct.module.css'

const categories = [
	{ id: 1, name: 'Laptop' },
	{ id: 2, name: 'Electronics' },
	{ id: 3, name: 'Fashion' },
	{ id: 4, name: 'Phone' },
]

function AddProducts() {
	const [product, setProduct] = useState({
		name: '',
		imageUrl: '',
		price: null,
		category: '',
		brand: '',
		desc: '',
	})

	const email = useSelector(selectEmail)

	const inputChangeHandler = e => {
		const { name, value } = e.target
		setProduct({ ...product, [name]: value })
	}
	const imageChangeHandler = e => {}

	const addProduct = (e) => {
		e.preventDefault()
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
							<div className={classes.progress}>
								<div className={classes.progressBar} style={{ width: '50%' }}>
									Uploading 50%
								</div>
							</div>
							<input
								type='file'
								accept='image/*'
								placeholder='Product Image'
								name='image'
								onChange={e => imageChangeHandler(e)}
							/>
							<input type='text' required name='imageUrl' value={product.imageUrl} disabled />
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
