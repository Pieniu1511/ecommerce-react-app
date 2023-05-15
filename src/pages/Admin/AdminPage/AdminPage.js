import React from 'react'
import { useSelector } from 'react-redux'
import { selectEmail } from '../../../store/slice/loginSlice'
import Permission from '../Permission'

// import classes from './AdminPage.module.css'

function AdminPage() {
	const email = useSelector(selectEmail)

	return (
		<>
			{email !== 'admin@gmail.com' ? (
				<Permission />
			) : (
				<>
					<h2>Admin Page</h2>
				</>
			)}
		</>
	)
}

export default AdminPage
