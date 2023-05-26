import React from 'react'
import { useDispatch } from 'react-redux'
import { popupActions } from '../../store/slice/popupSlice'

import classes from './CardLayout.module.css'

function CardLayout({ children, className }) {
	const dispatch = useDispatch()

	const closeCard = () => {
		dispatch(popupActions.closeLogin())
		dispatch(popupActions.closeReset())
		dispatch(popupActions.closeSignUp())
		dispatch(popupActions.closeConfirm())
	}

	const stopPropagation = event => {
		event.stopPropagation()
	}

	return (
		<div className={classes.backdrop} onClick={closeCard}>
			<div className={`${classes.layout} ${className}`} onClick={stopPropagation}>
				{children}
			</div>
		</div>
	)
}

export default CardLayout
