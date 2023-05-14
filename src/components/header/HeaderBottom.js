import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HiMenu } from 'react-icons/hi'
import MenuMobile from './MenuMobile'
import Cart from './Cart'
import Logo from '../../layouts/Logo/Logo'
import { loginActions } from '../../store/slice/loginSlice'
import { popupActions } from '../../store/slice/popupSlice'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { MdHistory } from 'react-icons/md'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify'

import classes from './HeaderBottom.module.css'

function HeaderBottom() {
	const [menuIsShown, setMenuIsShown] = useState(false)
	const [displayName, setDisplayName] = useState('')

	const isLoggedIn = useSelector(state => state.login.isLoggedIn)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				if (user.displayName == null) {
					const u1 = user.email.substring(0, user.email.indexOf('@'))
					const uName = u1.charAt(0).toUpperCase() + u1.slice(1)
					setDisplayName(uName)
				} else {
					setDisplayName(user.displayName)
				}

				dispatch(
					loginActions.setActiveUser({
						email: user.email,
						userName: user.displayName ? user.displayName : displayName,
						userId: user.uid,
					})
				)
			} else {
				setDisplayName('')
				dispatch(loginActions.removeActiveUser())
			}
		})
	}, [dispatch, displayName])

	const toggleLoginHandler = () => {
		dispatch(popupActions.openLogin())
	}

	const cartToggleHandler = () => {
		setMenuIsShown(!menuIsShown)
	}

	const logoutHandler = () => {
		signOut(auth)
			.then(() => {
				toast.success('Logout successfully.')
				navigate('/')
			})
			.catch(error => {
				toast.error(error.message)
			})
	}

	const openHistoryHandler = () => {
		navigate('orders')
	}

	return (
		<div className={classes.header}>
			<div className={`${classes.headerContainer} container`}>
				<Logo />
				<nav className={classes.navLeft}>
					<ul>
						<li className={classes.navLinks}>
							<NavLink className={({ isActive }) => (isActive ? `${classes.active}` : undefined)} to='/'>
								HOME
							</NavLink>
							<NavLink className={({ isActive }) => (isActive ? `${classes.active}` : undefined)} to='contact'>
								CONTACT
							</NavLink>
						</li>
					</ul>
				</nav>
				{isLoggedIn && <p className={classes.userName}>Hi, {displayName}</p>}
				<div className={classes.navRight}>
					{isLoggedIn && (
						<button className={classes.login} onClick={openHistoryHandler}>
							<MdHistory className={classes.loginImg} />
							<p className={classes.loginTitle}>
								Orders
								<br />
								History
							</p>
						</button>
					)}
					<Cart />
					{!isLoggedIn && (
						<button className={classes.login} onClick={toggleLoginHandler}>
							<img className={classes.loginImg} src='/images/user.svg' alt='user-icon' />
							<p className={classes.loginTitle}>
								Log in
								<br />
								My Account
							</p>
						</button>
					)}
					{isLoggedIn && (
						<button className={classes.login} onClick={logoutHandler}>
							<RiLogoutBoxRLine className={classes.loginImg} />
							<p className={classes.loginTitle}>Log out</p>
						</button>
					)}
				</div>
				<div className={classes.navMobile}>
					<Cart />
					<button className={classes.burgerBtn} onClick={cartToggleHandler}>
						<HiMenu />
					</button>
				</div>
			</div>
			{menuIsShown && <MenuMobile onCloseMenu={cartToggleHandler} />}
		</div>
	)
}

export default HeaderBottom
