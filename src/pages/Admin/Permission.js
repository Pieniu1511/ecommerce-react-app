import React from 'react'
import { Link } from 'react-router-dom'

function Permission() {
	return (
		<div className='permission'>
			<h2>Permission Denied</h2>
			<p>This page can only be view by an Admin user.</p>
			<Link to='/'>
				<button>Back to Home</button>
			</Link>
		</div>
	)
}

export default Permission
