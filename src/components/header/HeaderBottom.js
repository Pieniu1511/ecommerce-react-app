import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import classes from './HeaderBottom.module.css'
import { HiMenu } from 'react-icons/hi'
import MenuMobile from './MenuMobile'
import Cart from './Cart'
import Logo from '../../layouts/Logo/Logo'
import { popupActions } from '../../store/index'

function HeaderBottom() {
	const [menuIsShown, setMenuIsShown] = useState(false)

	const dispatch = useDispatch()

	const toggleLoginHandler = () => {
		dispatch(popupActions.openLogin())
	}

	const cartToggleHandler = () => {
		setMenuIsShown(!menuIsShown)
	}

	return (
		<div className={classes.header}>
			<div className={`${classes.headerContainer} container`}>
				<Logo />
				<nav className={classes.navLeft}>
					<ul>
						<li className={classes.navLinks}>
							<NavLink className={({isActive}) => (isActive ? `${classes.active}` : undefined)} to='/'>
								HOME
							</NavLink>
							<NavLink className={({isActive}) => (isActive ? `${classes.active}` : undefined)} to='contact'>
								CONTACT
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className={classes.navRight}>
					<button className={classes.login} to='login' onClick={toggleLoginHandler}>
						<img className={classes.loginImg} src='/images/user.svg' alt='user-icon' />
						<p className={classes.loginTitle}>
							Log in
							<br />
							My Account
						</p>
					</button>
					<Cart />
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
