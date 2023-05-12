import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from './auth.module.css'
import CardLayout from '../../layouts/cardLayout/CardLayout'
import { popupActions } from '../../store'

function Reset() {
    const dispatch = useDispatch()

    const closeResetHandler = () => {
        dispatch(popupActions.closeReset())
    }

  return (
    <CardLayout className={classes.layout}>
        <p className={classes.title}>Reset Your Password</p>
        <input type='email' name='email' placeholder='Email' className={classes.input} />
        <button className={`${classes.grey} ${classes.btn}`}><Link>Submit</Link></button>
        <button className={classes.transparent} onClick={closeResetHandler}>Cancel</button>
    </CardLayout>
  )
}

export default Reset