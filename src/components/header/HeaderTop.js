import React from 'react'
import classes from './HeaderTop.module.css'

function HeaderTop() {
  return (
    <div className={classes.header}>
        <div className={`${classes.headerContainer} container`}>
            <p>Free Shipping Over $100 & Free Return</p>
            <p>Hotline: <a href='tel:+48 533991333'>+48 533 991 333</a></p>
        </div>
    </div>
  )
}

export default HeaderTop