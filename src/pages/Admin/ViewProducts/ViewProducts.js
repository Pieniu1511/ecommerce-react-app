import React from 'react'
import { useSelector } from 'react-redux'
import { selectEmail } from '../../../store/slice/loginSlice'

function ViewProducts() {
	const email = useSelector(selectEmail)

	return <>
	{email !== 'admin@gmail.com' ? <div className='permission'>
		<h2>Permission Denied</h2>
		<p>This page can only be view by an Admin user.</p>
	</div> : (
		<>
		<h2>Admin Page</h2>
		</>
	)}
</>
}

export default ViewProducts
