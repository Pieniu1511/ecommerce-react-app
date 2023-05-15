import React from 'react'
import { useSelector } from 'react-redux'
import { selectEmail } from '../../../store/slice/loginSlice'
import Permission from '../Permission'

function ViewProducts() {
	const email = useSelector(selectEmail)

	return (
		<>
			{email !== 'admin@gmail.com' ? (
				<Permission />
			) : (
				<>
					<h2>View Products</h2>
				</>
			)}
		</>
	)
}

export default ViewProducts
