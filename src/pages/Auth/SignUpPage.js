import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Auth.module.css'

function SignUpPage() {
	return (
		<section className={classes.signup}>
			<p className={classes.title}>Create New Account</p>
			<form className={classes.form}>
				<input type='text' name='name' className={classes.input} placeholder='Name' />
				<input type='email' name='email' className={classes.input} placeholder='Email' />
				<input type='tel' name='mobile' className={classes.input} placeholder='Mobile number' />
				<input type='password' name='password' className={classes.input} placeholder='Password' />
				<button className={`${classes.yellow} ${classes.btn}`} type='submit'>
					<Link>Create</Link>
				</button>
				<button className={classes.transparent} type='button'>
					<Link to='/'>Cancel</Link>
				</button>
			</form>
		</section>
	)
}

export default SignUpPage
