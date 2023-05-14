import { useState } from 'react'
import { useDispatch } from 'react-redux'
import CardLayout from '../../layouts/cardLayout/CardLayout'
import { popupActions } from '../../store/slice/popupSlice'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify'
import { FadeLoader } from 'react-spinners'

import classes from './auth.module.css'

function Reset() {
	const [email, setEmail] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const dispatch = useDispatch()

	const closeResetHandler = () => {
		dispatch(popupActions.closeReset())
	}

	const resetPasswordHandler = e => {
		e.preventDefault()
		setIsLoading(true)
		sendPasswordResetEmail(auth, email)
			.then(() => {
				setIsLoading(false)
				toast.success('Check you email for reset link')
				setEmail('')
				dispatch(popupActions.closeReset())
			})
			.catch(error => {
				setIsLoading(false)
				toast.error(error.message)
			})
	}

	return (
		<CardLayout className={classes.layout}>
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
					<button className={classes.transparent} onClick={closeResetHandler} type='button'>
						Cancel
					</button>
				</form>
			)}
		</CardLayout>
	)
}

export default Reset
