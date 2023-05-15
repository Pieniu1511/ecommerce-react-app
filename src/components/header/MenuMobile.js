import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import classes from './MenuMobile.module.css'
import Logo from '../../layouts/Logo/Logo'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify'
import { selectEmail } from '../../store/slice/loginSlice'

function MenuMobile(props) {
	const isLoggedIn = useSelector(state => state.login.isLoggedIn)
	const email = useSelector(selectEmail)

	const navigate = useNavigate()

	const logoutHandler = () => {
		signOut(auth)
			.then(() => {
				toast.success('Logout successfully.')
				props.onCloseMenu()
				navigate('login')
			})
			.catch(error => {
				toast.error(error.message)
				props.onCloseMenu()
			})
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
					{email === 'admin@gmail.com' ? (
						<li>
							<Link to='login' className={classes.mobileLink} onClick={props.onCloseMenu}>
								Admin
							</Link>
						</li>
					) : null}
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
							<Link to='orders' className={classes.mobileLink} onClick={props.onCloseMenu}>
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
