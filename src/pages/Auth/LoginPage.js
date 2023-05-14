import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify'
import { FadeLoader } from 'react-spinners'

import classes from './Auth.module.css'

function LoginPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const navigate = useNavigate()

	const loginUser = e => {
		e.preventDefault()
		setIsLoading(true)
		signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				setIsLoading(false)
				toast.success('Login Successful...')
				navigate('/')
			})
			.catch(error => {
				setIsLoading(false)
				toast.error(error.message)
			})
	}

	const provider = new GoogleAuthProvider()
	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then(result => {
				const user = result.user
				console.log(user)
				toast.success('Login Successful...')
				navigate('/')
			})
			.catch(error => {
				toast.error(error.message)
			})
	}

	return (
		<section className={classes.login}>
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
					<button className={classes.reminder}>
						<Link to='/reset'>Forgot your password?</Link>
					</button>
					<div>
						<button className={`${classes.grey} ${classes.btn}`} type='submit'>
							Login
						</button>
						<button className={`${classes.yellow} ${classes.btn}`} type='button'>
							Sign up
						</button>
					</div>
					<p className={classes.or}>-- or --</p>
					<button className={`${classes.authGoogle} ${classes.btn}`} type='button' onClick={signInWithGoogle}>
						<FaGoogle className={classes.google} /> Login with Google
					</button>
				</form>
			)}
		</section>
	)
}

export default LoginPage
