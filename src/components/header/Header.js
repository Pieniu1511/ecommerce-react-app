import React from 'react'
// import classes from './Header.module.css'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'
import Login from '../auth/Login'
import { useSelector } from 'react-redux'

function Header() {
	const login = useSelector(state => state.login.showLogin)

	console.log(login)

	return (
		<>
			<header>
				<HeaderTop />
				<HeaderBottom />
			</header>
			{login && <Login />}
		</>
	)
}

export default Header
