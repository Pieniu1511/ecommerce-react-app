import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from './auth.module.css'
import CardLayout from '../../layouts/CardLayout/CardLayout'
import { popupActions } from '../../store'

function Reset() {
	const dispatch = useDispatch()

	const closeResetHandler = () => {
		dispatch(popupActions.closeReset())
	}

	return (
		<CardLayout className={classes.layout}>
			<p className={classes.title}>Reset Your Password</p>
			<p className={classes.info}>We will send you an email to reset your password</p>
			<form className={classes.form}>
				<input type='email' name='email' placeholder='Email' className={classes.input} />
				<button className={`${classes.grey} ${classes.btn}`} type='submit'>
					<Link>Submit</Link>
				</button>
				<button className={classes.transparent} onClick={closeResetHandler} type='button'>
					Cancel
				</button>
			</form>
		</CardLayout>
	)
}

export default Reset
