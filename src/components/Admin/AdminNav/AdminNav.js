import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './AdminNav.module.css'

function AdminNav() {
	return (
		<nav className={classes.nav}>
			<ul className={`${classes.navContainer} container`}>
				<li className={classes.navLink}>
					<NavLink to='' className={({ isActive }) => (isActive ? `${classes.active}` : undefined)} end>
						Home
					</NavLink>
				</li>
				<li className={classes.navLink}>
					<NavLink to='view-products' className={({ isActive }) => (isActive ? `${classes.active}` : undefined)}>
						View Products
					</NavLink>
				</li>
				<li className={classes.navLink}>
					<NavLink to='add-product' className={({ isActive }) => (isActive ? `${classes.active}` : undefined)}>
						Add Products
					</NavLink>
				</li>
				<li className={classes.navLink}>
					<NavLink to='orders' className={({ isActive }) => (isActive ? `${classes.active}` : undefined)}>
						View Orders
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default AdminNav
