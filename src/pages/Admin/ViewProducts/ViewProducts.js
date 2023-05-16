import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectEmail } from '../../../store/slice/loginSlice'
import Permission from '../Permission'
import { toast } from 'react-toastify'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../../firebase/config'

function ViewProducts() {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const email = useSelector(selectEmail)

	const getProducts = () => {
		setIsLoading(true)

		try {
			setIsLoading(false)
			const productsRef = collection(db, 'products')
			const q = query(productsRef, orderBy('createdAt', 'desc'))

			onSnapshot(q, snapshot => {
				console.log(snapshot)
			})
		} catch (error) {
			setIsLoading(false)
			toast.error(error.message)
		}
	}

	return <>{email !== 'admin@gmail.com' ? <Permission /> : <></>}</>
}

export default ViewProducts
