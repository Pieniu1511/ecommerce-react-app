import React from 'react'
import { Link } from 'react-router-dom'
import CardLayout from '../../layouts/cardLayout/CardLayout'
import { FaGoogle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

import classes from './auth.module.css'
import { popupActions } from '../../store'

function Login() {
	const dispatch = useDispatch()

	const showResetHandler = () => {
		dispatch(popupActions.closeLogin())
		dispatch(popupActions.openReset())
	}

	const showSignUpHandler = () => {
		dispatch(popupActions.closeLogin())
		dispatch(popupActions.openSignUp())
	}

	return (
		<CardLayout className={classes.layout}>
			<p className={classes.title}>Login</p>
			<input type='email' name='email' placeholder='Email' className={classes.input} />
			<input type='password' name='password' placeholder='Password' className={classes.input} />
			<button className={classes.reminder} onClick={showResetHandler}>Forgot your password?</button>
			<div>
				<button className={`${classes.grey} ${classes.btn}`}>
					<Link>Login</Link>
				</button>
				<button className={`${classes.yellow} ${classes.btn}`} onClick={showSignUpHandler}>
					Sign Up
				</button>
			</div>
			<p className={classes.or}>-- or --</p>
			<button className={`${classes.authGoogle} ${classes.btn}`}><FaGoogle className={classes.google} /> Login with Google</button>
		</CardLayout>
	)
}

export default Login
