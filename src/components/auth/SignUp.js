import { useState } from 'react'
import { useDispatch } from 'react-redux'

import CardLayout from '../../layouts/cardLayout/CardLayout'
import { popupActions } from '../../store'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'

import classes from './auth.module.css'

function SignUp() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [cPassword, setCPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const dispatch = useDispatch()

	const closeSignUpHandler = () => {
		dispatch(popupActions.closeSignUp())
	}

	const registerUser = e => {
		e.preventDefault()
		if (password !== cPassword) {
			toast.error('Passwords do not match')
		}
		setIsLoading(true)

		createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				const user = userCredential.user
				// ...
			})
			.catch(error => {
				const errorCode = error.code
				const errorMessage = error.message
				// ..
			})
	}

	return (
		<>
			<ToastContainer />
			<CardLayout className={classes.layout}>
				<p className={classes.title}>Create New Account</p>
				<form className={classes.form} onSubmit={registerUser}>
					<input
						type='email'
						name='email'
						className={classes.input}
						placeholder='Email'
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						type='password'
						name='password'
						className={classes.input}
						placeholder='Password'
						required
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<input
						type='password'
						name='password'
						className={classes.input}
						placeholder='Confirm Password'
						required
						value={cPassword}
						onChange={e => setCPassword(e.target.value)}
					/>
					<button className={`${classes.yellow} ${classes.btn}`} type='submit'>
						Create
					</button>
					<button className={classes.transparent} onClick={closeSignUpHandler} type='button'>
						Cancel
					</button>
				</form>
			</CardLayout>
		</>
	)
}

export default SignUp
