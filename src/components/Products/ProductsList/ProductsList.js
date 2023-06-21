import { useEffect, useState } from 'react'
import ListTop from './ListTop'
import ProductItem from '../ProductItem/ProductItem'
import { FadeLoader } from 'react-spinners'
import { useDispatch, useSelector } from 'react-redux'
import { filterBySearch, selectFilteredProducts, sortProducts } from '../../../store/slice/filterSlice'

import classes from './ProductsList.module.css'
import Pagination from '../../Pagination/Pagination'

function ProductsList({ products, isLoading, onShowFilter, filterIsShown }) {
	const [grid, setGrid] = useState(true)
	const [search, setSearch] = useState('')
	const [sort, setSort] = useState('latest')
	const filteredProducts = useSelector(selectFilteredProducts)

	const [currentPage, setCurrentPage] = useState(1)
	const [productsPerPage, setProductsPerPage] = useState(9)
	const indexOfLastProduct = currentPage * productsPerPage
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage
	const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

	const dispatch = useDispatch()

	const changeSort = e => {
		setSort(e.target.value)
	}

	useEffect(() => {
		dispatch(sortProducts({ products, sort }))
	}, [sort, dispatch, products])

	useEffect(() => {
		dispatch(filterBySearch({ products, search }))
	}, [search, dispatch, products])

	const setGridHandler = () => {
		setGrid(true)
	}

	const setListHandler = () => {
		setGrid(false)
	}

	return (
			<div className={classes['products-list']} id='products'>
				<ListTop
					onSetGrid={setGridHandler}
					onSetList={setListHandler}
					grid={grid}
					search={search}
					onSearchChange={e => setSearch(e.target.value)}
					onShowFilter={onShowFilter}
					filterIsShown={filterIsShown}
					filteredProducts={filteredProducts}
					sort={sort}
					changeSort={changeSort}
				/>
				{isLoading ? (
					<FadeLoader color={'#febd69'} className='loader' />
				) : (
					<div className={grid ? `${classes.grid}` : `${classes.list}`}>
						{products.length === 0 ? (
							<p>No products found.</p>
						) : (
							<>
								{currentProducts.map(product => {
									return (
										<div key={product.id}>
											<ProductItem {...product} grid={grid} product={product} />
										</div>
									)
								})}
							</>
						)}
					</div>
				)}
			<Pagination
				productsPerPage={productsPerPage}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalProducts={filteredProducts.length}
			/>
			</div>
	)
}

export default ProductsList
