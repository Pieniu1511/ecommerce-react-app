import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Logo.module.css'

function Logo() {
	return (
		<Link className={classes.logo} to='/'>
			<h1>
				<span>D</span>igit.<span>Z</span>one
			</h1>
		</Link>
	)
}

export default Logo
