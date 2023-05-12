import React from 'react'
// import classes from './Header.module.css'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'
import Login from '../auth/Login'
import { useSelector } from 'react-redux'
import Reset from '../auth/Reset'
import SignUp from '../auth/SignUp'

function Header() {
	const login = useSelector(state => state.popup.showLogin)
	const reset = useSelector(state => state.popup.showReset)
	const signup = useSelector(state => state.popup.showSignUp)

	return (
		<>
			<header>
				<HeaderTop />
				<HeaderBottom />
			</header>
			{login && <Login />}
			{reset && <Reset />}
			{signup && <SignUp />}
		</>
	)
}

export default Header
