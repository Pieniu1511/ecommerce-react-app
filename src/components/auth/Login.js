import React from 'react'
import { Link } from 'react-router-dom'
import CardLayout from '../../layouts/cardLayout/CardLayout'

import classes from './Login.module.css'

function Login() {
	return (
		<CardLayout className={classes.layout}>
			<p className={classes.title}>Login</p>
			<input placeholder='Email' className={classes.input} />
			<input placeholder='Password' className={classes.input} />
			<Link className={classes.reminder}>Forgot your password?</Link>
			<div>
				<button className={`${classes.grey} ${classes.btn}`}>
					<Link>Login</Link>
				</button>
				<button className={`${classes.yellow} ${classes.btn}`}>
					<Link>Sign Up</Link>
				</button>
			</div>
		</CardLayout>
	)
}

export default Login
