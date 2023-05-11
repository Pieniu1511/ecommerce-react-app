import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import classes from './HeaderBottom.module.css'
import { HiMenu } from 'react-icons/hi'
import MenuMobile from './MenuMobile'
import Cart from './Cart'
import Logo from '../../layouts/Logo'

function HeaderBottom() {
	const [menuIsShown, setMenuIsShown] = useState(false)

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
					<Link className={classes.link} to='login'>
						<img className={classes.linkImg} src='/images/user.svg' alt='user-icon' />
						<p className={classes.linkTitle}>
							Log in
							<br />
							My Account
						</p>
					</Link>
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
