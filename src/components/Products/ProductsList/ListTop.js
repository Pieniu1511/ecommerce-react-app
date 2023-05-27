import { BsFillGridFill } from 'react-icons/bs'
import { FaListAlt } from 'react-icons/fa'
import { FiFilter } from 'react-icons/fi'
import Search from '../../Search/Search'

import classes from './ListTop.module.css'

function ListTop(props) {
	return (
		<div className={classes.top}>
			<div className={classes.icons}>
				<div className={classes.iconsLeft}>
					<BsFillGridFill onClick={props.onSetGrid} className={`${classes.icon} ${props.grid ? classes.active : ''}`} />
					<FaListAlt onClick={props.onSetList} className={`${classes.icon} ${!props.grid ? classes.active : ''}`} />
					<p className={classes.productsCounter}>
						<b>10</b> Products found.
					</p>
				</div>
				<button className={classes.filter}>
					<FiFilter className={classes.filterIcon} />
					<p>Product Filter</p>
				</button>
			</div>
			<div className={classes.searchBar}>
				<Search value={props.search} onChangeSearch={props.onSearchChange} />
			</div>
			<div className={classes.sort}>
				<label>Sort by:</label>
				<select>
					<option value='latest'>Latest</option>
					<option value='lowest-price'>Lowest Price</option>
					<option value='highest-price'>Highest Price</option>
					<option value='a-z'>A - Z</option>
					<option value='z-a'>Z - A</option>
				</select>
			</div>
		</div>
	)
}

export default ListTop
