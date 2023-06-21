import { configureStore } from '@reduxjs/toolkit'
import popupSlice from './slice/popupSlice'
import loginSlice from './slice/loginSlice'
import productsSlice from './slice/productsSlice'
import filterSlice from './slice/filterSlice'
import cartSlice from './slice/cartSlice'

const store = configureStore({
	reducer: {
		popup: popupSlice.reducer,
		login: loginSlice.reducer,
		products: productsSlice.reducer,
		filter: filterSlice.reducer,
		cart: cartSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

export default store
