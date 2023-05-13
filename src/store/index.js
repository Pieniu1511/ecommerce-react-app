import { configureStore, createSlice } from '@reduxjs/toolkit'

const popupState = { showLogin: false, showReset: false, showSignUp: false }

const popupSlice = createSlice({
	name: 'login',
	initialState: popupState,
	reducers: {
		openLogin(state) {
			state.showLogin = true
		},
		closeLogin(state) {
			state.showLogin = false
		},
		openReset(state) {
			state.showReset = true
		},
		closeReset(state) {
			state.showReset = false
		},
		openSignUp(state) {
			state.showSignUp = true
		},
		closeSignUp(state) {
			state.showSignUp = false
		},
	},
})

const loginSlice = createSlice({
	name: 'login',
	initialState: { isLoggedIn: false },
	reducers: {
		logIn(state) {
			state.isLoggedIn = true
		},
		logOut(state) {
			state.isLoggedIn = false
		},
	},
})

const store = configureStore({
	reducer: { popup: popupSlice.reducer, login: loginSlice.reducer },
})

export const popupActions = popupSlice.actions
export const loginActions = loginSlice.actions

export default store
