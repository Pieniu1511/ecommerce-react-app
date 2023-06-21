import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HiMenu } from 'react-icons/hi'
import MenuMobile from './MenuMobile'
import CartIcon from './CartIcon'
import Logo from '../../layouts/Logo/Logo'
import { loginActions, selectEmail } from '../../store/slice/loginSlice'
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
	const email = useSelector(selectEmail)

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

	const menuToggleHandler = () => {
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
					<ul className={classes.navLinks}>
						<li>
							<NavLink className={({ isActive }) => (isActive ? `${classes.active}` : undefined)} to='/'>
								HOME
							</NavLink>
						</li>
						<li>
							<NavLink className={({ isActive }) => (isActive ? `${classes.active}` : undefined)} to='contact'>
								CONTACT
							</NavLink>
						</li>
						<li>
							{email === 'admin@gmail.com' ? (
								<NavLink className={({ isActive }) => (isActive ? `${classes.active}` : undefined)} to='admin'>
									ADMIN
								</NavLink>
							) : null}
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
						<CartIcon />
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
					<CartIcon />
					<button className={classes.burgerBtn} onClick={menuToggleHandler}>
						<HiMenu />
					</button>
				</div>
			</div>
			{menuIsShown && <MenuMobile onCloseMenu={menuToggleHandler} />}
		</div>
	)
}

export default HeaderBottom
