import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	products: [],
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		storeProducts(state, action) {
			state.products = action.payload.products
		},
	},
})

export const productsActions = productsSlice.actions

export const selectProducts = state => state.products.products

export default productsSlice
