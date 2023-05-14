import { configureStore } from '@reduxjs/toolkit'
import popupSlice from './slice/popupSlice'
import loginSlice from './slice/loginSlice'


const store = configureStore({
	reducer: { popup: popupSlice.reducer, login: loginSlice.reducer },
})

export default store
