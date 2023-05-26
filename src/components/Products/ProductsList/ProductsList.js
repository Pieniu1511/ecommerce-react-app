import { useState } from 'react'

import classes from './ProductsList.module.css'
import ListTop from './ListTop'

function ProductsList() {
	const [grid, setGrid] = useState(true)

	const setGridHandler = () => {
		setGrid(true)
	}

	const setListHandler = () => {
		setGrid(false)
	}
 
	return <div className={classes["products-list"]} id="products">
		<ListTop onSetGrid={setGridHandler} onSetList={setListHandler} />
	</div>
}

export default ProductsList
