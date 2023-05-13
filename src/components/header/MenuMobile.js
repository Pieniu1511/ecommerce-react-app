import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import classes from './MenuMobile.module.css'
import Logo from '../../layouts/Logo/Logo'
import { loginActions } from '../../store'

function MenuMobile(props) {
	const isLoggedIn = useSelector(state => state.login.isLoggedIn)

	const dispatch = useDispatch()

	const logoutHandler = () => {
		dispatch(loginActions.logOut())
		props.onCloseMenu()
	}

	return (
		<div className={classes.menuMobile}>
			<div className={classes.menuTop}>
				<Logo />
				<button className={classes.closeBtn} onClick={props.onCloseMenu}>
					<HiX />
				</button>
			</div>
			<nav className={classes.mobileLinks}>
				<ul>
					<li>
						<Link to='/' className={classes.mobileLink} onClick={props.onCloseMenu}>
							Home
						</Link>
					</li>
					<li>
						<Link to='contact' className={classes.mobileLink} onClick={props.onCloseMenu}>
							Contact Us
						</Link>
					</li>
					{!isLoggedIn && (
						<li>
							<Link to='login' className={classes.mobileLink} onClick={props.onCloseMenu}>
								Login
							</Link>
						</li>
					)}
					{isLoggedIn && (
						<li>
							<Link to='/' className={classes.mobileLink} onClick={logoutHandler}>
								Logout
							</Link>
						</li>
					)}
					{isLoggedIn && (
						<li>
							<Link to='history' className={classes.mobileLink} onClick={props.onCloseMenu}>
								Orders History
							</Link>
						</li>
					)}
					<li>
						<Link className={`${classes.mobileLink} ${classes.mobileLinkCart}`} onClick={props.onCloseMenu}>
							Cart <img src='/images/cart.svg' alt='cart-icon' className={classes.mobileCart} />
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default MenuMobile
