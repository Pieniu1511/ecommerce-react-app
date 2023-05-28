import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import classes from './ProductDetail.module.css'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../firebase/config'
import { toast } from 'react-toastify'
import { FadeLoader } from 'react-spinners'

function ProductDetail() {
	const [product, setProduct] = useState(null)

	const { id } = useParams()

	useEffect(() => {
		getProduct()
	}, [])

	const getProduct = async () => {
		const docRef = doc(db, 'products', id)
		const docSnap = await getDoc(docRef)

		if (docSnap.exists()) {
			const obj = {
				id: id,
				...docSnap.data(),
			}
			setProduct(obj)
		} else {
			toast.error('Product not found')
		}
	}

	return (
		<section className={classes.product}>
			<div className={`${classes.productContainer} container`}>
				<h2>Product Details</h2>
				<div>
					<Link to='/#products'>&larr; Back To Products</Link>
				</div>
				<div className={classes.details}>
					{product === null ? (
						<FadeLoader color={'#febd69'} className='loader' />
					) : (
						<>
							<div className={classes.img}>
								<img src={product.imageUrl} alt={product.name} />
							</div>
							<div className={classes.content}>
								<h3>{product.name}</h3>
								<p className={classes.price}>{`$${product.price}`}</p>
								<p>{product.desc}</p>
								<p>
									<b>SKU:</b> {product.id}
								</p>
								<p>
									<b>Brand:</b> {product.brand}
								</p>
								<div className={classes.count}>
									<button className={classes.changerBtn}>-</button>
									<p>
										<b>2</b>
									</p>
									<button className={classes.changerBtn}>+</button>
								</div>
								<button className={classes.addBtn}>ADD TO CART</button>
							</div>
						</>
					)}
				</div>
			</div>
		</section>
	)
}

export default ProductDetail
