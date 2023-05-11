import { configureStore, createSlice } from '@reduxjs/toolkit'

const loginState = { showLogin: false }

const loginSlice = createSlice({
	name: 'login',
	initialState: loginState,
	reducers: {
		toggle(state) {
			state.showLogin = !state.showLogin
		},
	},
})

const store = configureStore({
	reducer: { login: loginSlice.reducer },
})

export const loginActions = loginSlice.actions

export default store
