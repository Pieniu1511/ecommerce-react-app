import React from 'react'
import { useSelector } from 'react-redux'
import { selectEmail } from '../../../store/slice/loginSlice'
import Permission from '../Permission'

function AdminOrders() {
	const email = useSelector(selectEmail)

	return <>
	{email !== 'admin@gmail.com' ? <Permission /> : (
		<>
		<h2>ViewOrders</h2>
		</>
	)}
</>
}

export default AdminOrders
