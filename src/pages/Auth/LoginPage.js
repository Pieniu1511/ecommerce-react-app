import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import classes from './Auth.module.css'

function LoginPage() {
	return (
		<section className={classes.login}>
			<p className={classes.title}>Login</p>
			<form className={classes.form}>
				<input type='email' name='email' placeholder='Email' className={classes.input} />
				<input type='password' name='password' placeholder='Password' className={classes.input} />
				<button className={classes.reminder}>
					<Link to='/reset'>Forgot your password?</Link>
				</button>
				<div>
					<button className={`${classes.grey} ${classes.btn}`} type='submit'>
						<Link>Login</Link>
					</button>
					<button className={`${classes.yellow} ${classes.btn}`} type='button'>
						<Link to='/signup'>Sign up</Link>
					</button>
				</div>
				<p className={classes.or}>-- or --</p>
				<button className={`${classes.authGoogle} ${classes.btn}`} type='button'>
					<FaGoogle className={classes.google} /> Login with Google
				</button>
			</form>
		</section>
	)
}

export default LoginPage
