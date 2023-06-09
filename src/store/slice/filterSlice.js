import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	filteredProducts: [],
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		filterBySearch(state, action) {
			const { products, search } = action.payload
			const tempProducts = products.filter(
				product =>
					product.name.toLowerCase().includes(search.toLowerCase()) ||
					product.category.toLowerCase().includes(search.toLowerCase())
			)

			state.filteredProducts = tempProducts
		},
		sortProducts(state, action) {
			const { products, sort } = action.payload
			let tempProducts = []
			if (sort === 'latest') {
				tempProducts = products
			}
			if (sort === 'lowest-price') {
				tempProducts = products.slice().sort((a, b) => {
					return a.price - b.price
				})
			}
			if (sort === 'highest-price') {
				tempProducts = products.slice().sort((a, b) => {
					return b.price - a.price
				})
			}
			if (sort === 'a-z') {
				tempProducts = products.slice().sort((a, b) => {
					return a.name.localeCompare(b.name)
				})
			}
			if (sort === 'z-a') {
				tempProducts = products.slice().sort((a, b) => {
					return b.name.localeCompare(a.name)
				})
			}

			state.filteredProducts = tempProducts
		},
		filterByCategory(state, action) {
			const { products, category } = action.payload
			let tempProducts = []
			if (category === 'All') {
				tempProducts = products
			} else {
				tempProducts = products.filter(product => product.category === category)
			}
			state.filteredProducts = tempProducts
		},
		filterByBrand(state, action) {
			const { products, brand } = action.payload
			let tempProducts = []
			if (brand === 'All') {
				tempProducts = products
			} else {
				tempProducts = products.filter(product => product.brand === brand)
			}
			state.filteredProducts = tempProducts
		},
		filterByPrice(state, action) {
			const { products, maxPrice } = action.payload
            let tempProducts = products.filter(product => product.price <= maxPrice)
            state.filteredProducts = tempProducts
		},
	},
})

export const { filterBySearch, sortProducts, filterByCategory, filterByBrand, filterByPrice } = filterSlice.actions

export const selectFilteredProducts = state => state.filter.filteredProducts

export default filterSlice
