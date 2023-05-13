import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Auth.module.css'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify'
import { FadeLoader } from 'react-spinners'

function ResetPage() {
	const [email, setEmail] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const resetPasswordHandler = e => {
		e.preventDefault()
		setIsLoading(true)
		sendPasswordResetEmail(auth, email)
			.then(() => {
				setIsLoading(false)
				toast.success('Check you email for reset link')
				setEmail('')
			})
			.catch(error => {
				setIsLoading(false)
				toast.error(error.message)
			})
	}

	return (
		<section className={classes.reset}>
			<p className={classes.title}>Reset Your Password</p>
			<p className={classes.info}>We will send you an email to reset your password</p>
			{isLoading && <FadeLoader color={'#febd69'} className={classes.loader} />}
			{!isLoading && (
				<form className={classes.form} onSubmit={resetPasswordHandler}>
					<input
						type='email'
						name='email'
						placeholder='Email'
						className={classes.input}
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<button className={`${classes.grey} ${classes.btn}`} type='submit'>
						Submit
					</button>
					<button className={classes.transparent} type='button'>
						<Link to='/'>Cancel</Link>
					</button>
				</form>
			)}
		</section>
	)
}

export default ResetPage
