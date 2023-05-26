import React from 'react'
import CardLayout from '../../../layouts/cardLayout/CardLayout'

import classes from './ConfirmDelete.module.css'
import { useDispatch } from 'react-redux'
import { popupActions } from '../../../store/slice/popupSlice'

function ConfirmDelete(props) {
    const dispatch = useDispatch()

    const closeConfirm = () => {
        dispatch(popupActions.closeConfirm())
    }

  return (
    <CardLayout>
        <p className={classes.title}>You are about to delete this product</p>
        <div className={classes.btns}>
            <button className={classes.yellow} onClick={() => props.onDelete(props.id, props.imageUrl)}>Delete</button>
            <button className={classes.grey} onClick={closeConfirm}>Cancel</button>
        </div>
    </CardLayout>
  )
}

export default ConfirmDelete