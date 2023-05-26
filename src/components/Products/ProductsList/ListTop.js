import React from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { FaListAlt } from 'react-icons/fa'

import classes from './ListTop.module.css'

function ListTop(props) {
	return (
		<div className={classes.top}>
			<div className={classes.icons}>
				<BsFillGridFill onClick={props.onSetGrid} className={classes.icon} />
				<FaListAlt onClick={props.onSetList} className={classes.icon} />
				<p>
					<b>10</b> Products found.
				</p>
			</div>
			<div>
				<p>Search</p>
			</div>
		</div>
	)
}

export default ListTop
