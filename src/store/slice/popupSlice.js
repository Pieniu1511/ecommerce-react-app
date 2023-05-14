import { createSlice } from '@reduxjs/toolkit'

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

export const popupActions = popupSlice.actions

export default popupSlice