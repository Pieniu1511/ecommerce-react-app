import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CardLayout from '../../layouts/cardLayout/CardLayout'
import { FaGoogle } from 'react-icons/fa'
import { loginActions, popupActions } from '../../store'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify'
import { FadeLoader } from 'react-spinners'

import classes from './auth.module.css'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const showResetHandler = () => {
		dispatch(popupActions.closeLogin())
		dispatch(popupActions.openReset())
	}

	const showSignUpHandler = () => {
		dispatch(popupActions.closeLogin())
		dispatch(popupActions.openSignUp())
	}

	const loginUser = e => {
		e.preventDefault()
		setIsLoading(true)
		signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				const user = userCredential.user
				console.log(user)
				console.log('działą')
				setIsLoading(false)
				toast.success('Login Successful...')
				dispatch(popupActions.closeLogin())
				dispatch(loginActions.logIn())
				navigate('/')
			})
			.catch(error => {
				setIsLoading(false)
				toast.error(error.message)
			})
	}

	const provider = new GoogleAuthProvider()
	const signInWithGoogle = () => {
		setIsLoading(true)
		signInWithPopup(auth, provider)
			.then(result => {
				const user = result.user
				console.log(user)
				setIsLoading(false)
				toast.success('Login Successful...')
				dispatch(popupActions.closeLogin())
				dispatch(loginActions.logIn())
				navigate('/')
			})
			.catch(error => {
				setIsLoading(false)
				toast.error(error.message)
			})
	}

	return (
		<CardLayout className={classes.layout}>
			<p className={classes.title}>Login</p>
			{isLoading && <FadeLoader color={'#febd69'} className={classes.loader} />}
			{!isLoading && (
				<form className={classes.form} onSubmit={loginUser}>
					<input
						type='email'
						name='email'
						placeholder='Email'
						className={classes.input}
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						type='password'
						name='password'
						placeholder='Password'
						className={classes.input}
						required
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<button className={classes.reminder} onClick={showResetHandler}>
						Forgot your password?
					</button>
					<div>
						<button className={`${classes.grey} ${classes.btn}`} type='submit'>
							Login
						</button>
						<button className={`${classes.yellow} ${classes.btn}`} onClick={showSignUpHandler} type='button'>
							Sign Up
						</button>
					</div>
					<p className={classes.or}>-- or --</p>
					<button className={`${classes.authGoogle} ${classes.btn}`} type='button' onClick={signInWithGoogle}>
						<FaGoogle className={classes.google} /> Login with Google
					</button>
				</form>
			)}
		</CardLayout>
	)
}

export default Login
