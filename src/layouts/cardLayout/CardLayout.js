import React from 'react'
import { useDispatch } from 'react-redux'
import { loginActions } from '../../store'

import classes from './CardLayout.module.css'

function CardLayout({ children, className }) {
	const dispatch = useDispatch()

	const closeCard = () => {
		dispatch(loginActions.toggle())
	}

	const stopPropagation = event => {
		event.stopPropagation()
	}

	return (
		<div className={classes.backdrop} onClick={closeCard}>
			<div className={`${classes.layout} ${className}`} onClick={stopPropagation}>{children}</div>
		</div>
	)
}

export default CardLayout
