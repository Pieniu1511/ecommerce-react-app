import React, { useState } from 'react'

import classes from './Paginations.module.css'

function Pagination({ productsPerPage, currentPage, setCurrentPage, totalProducts }) {
	const pageNumbers = []
	const totalPages = totalProducts / productsPerPage
	const [pageNumberLimit, setPageNumberLimit] = useState(5)
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

	const paginate = pageNumber => {
		setCurrentPage(pageNumber)
	}

	const paginateNext = () => {
		setCurrentPage(currentPage + 1)
		if (currentPage + 1 > maxPageNumberLimit) {
			setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
			setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
		}
	}

	const paginatePrev = () => {
		setCurrentPage(currentPage - 1)
		if ((currentPage - 1) % pageNumberLimit === 0) {
			setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
			setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
		}
	}

	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<ul className={classes.pagination}>
			<li
				onClick={paginatePrev}
				className={
					currentPage === pageNumbers[0]
						? `
			${classes.hidden}`
						: null
				}>
				Prev
			</li>
			{pageNumbers.map(number => {
				if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
					return (
						<li
							key={number}
							onClick={() => paginate(number)}
							className={currentPage === number ? `${classes.active}` : null}>
							{number}
						</li>
					)
				} else return ''
			})}
			<li
				onClick={paginateNext}
				className={currentPage === pageNumbers[pageNumbers.length - 1] ? `${classes.hidden}` : null}>
				Next
			</li>
			<p>
				<b className={classes.page}>Page {currentPage}</b> <span>of</span> <b>{Math.ceil(totalPages)}</b>
			</p>
		</ul>
	)
}

export default Pagination
