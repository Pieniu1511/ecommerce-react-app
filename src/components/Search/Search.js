import React from 'react'
import { BiSearch } from 'react-icons/bi'

import classes from './Search.module.css'

function Search(props) {
	return (
		<div className={classes.search}>
			<BiSearch className={classes.icon} />
			<input type='text' placeholder='Search by name' value={props.value} onChange={props.onChangeSearch} />
		</div>
	)
}

export default Search
