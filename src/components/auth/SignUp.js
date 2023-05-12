import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from './auth.module.css'
import CardLayout from '../../layouts/cardLayout/CardLayout'
import { popupActions } from '../../store'

function SignUp() {
    const dispatch = useDispatch()

    const closeSignUpHandler = () => {
        dispatch(popupActions.closeSignUp())
    }

  return (
    <CardLayout className={classes.layout}>
        <p className={classes.title}>Create New Account</p>
        <input type='text' name='name' className={classes.input} placeholder='Name' />
        <input type='email' name='email' className={classes.input} placeholder='Email' />
        <input type='tel' name='mobile' className={classes.input} placeholder='Mobile number' />
        <input type='password' name='password' className={classes.input} placeholder='Password' />
        <button className={`${classes.yellow} ${classes.btn}`}><Link>Create</Link></button>
        <button className={classes.transparent} onClick={closeSignUpHandler}>Cancel</button>
    </CardLayout>
  )
}

export default SignUp