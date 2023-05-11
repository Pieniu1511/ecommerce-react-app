import React from 'react'
import classes from './Footer.module.css'

function Footer() {
	const date = new Date()
	const year = date.getFullYear()

	return (
		<div className={classes.footer}>
			<div className={`${classes.footerContainer} container`}>
				<p>&copy; {year} All Rights Reserved</p>
				<p>Created by: Edmund Pieńkowski</p>
			</div>
		</div>
	)
}

export default Footer
