import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Auth.module.css'

function ResetPage() {
	return (
		<section className={classes.reset}>
			<p className={classes.title}>Reset Your Password</p>
			<p className={classes.info}>We will send you an email to reset your password</p>
			<form className={classes.form}>
				<input type='email' name='email' placeholder='Email' className={classes.input} />
				<button className={`${classes.grey} ${classes.btn}`} type='submit'>
					<Link>Submit</Link>
				</button>
				<button className={classes.transparent} type='button'>
					<Link to='/'>Cancel</Link>
				</button>
			</form>
		</section>
	)
}

export default ResetPage
