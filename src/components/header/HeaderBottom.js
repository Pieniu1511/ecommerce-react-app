import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import classes from './HeaderBottom.module.css'
import { HiMenu } from 'react-icons/hi'
import MenuMobile from './MenuMobile'

export const logo = (
	<Link className={classes.logo} to='/'>
		<h1>
			<span>D</span>igit.<span>Z</span>one
		</h1>
	</Link>
)

const cart = (
	<Link className={classes.link}>
		<img className={classes.linkImg} src='/images/cart.SVG' alt='cart-icon' />
		<div className={classes.linkAdd}>
			<div className={classes.badge}>2</div>
			<p className={classes.price}>$ 500.00</p>
		</div>
	</Link>
)

function HeaderBottom() {
	const [menuIsShown, setMenuIsShown] = useState(false)

	const cartToggleHandler = () => {
		setMenuIsShown(!menuIsShown)
	}

	return (
		<div className={classes.header}>
			<div className={`${classes.headerContainer} container`}>
				{logo}
				<nav className={classes.navLeft}>
					<ul>
						<li className={classes.navLinks}>
							<NavLink className={classes.navLink} to='/'>
								HOME
							</NavLink>
							<NavLink className={classes.navLink} to='contact'>
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
					{cart}
				</div>
				<div className={classes.navMobile}>
					{cart}
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
