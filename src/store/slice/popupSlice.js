import { createSlice } from '@reduxjs/toolkit'

const popupState = { showLogin: false, showReset: false, showSignUp: false, showConfirm: false, showCart: false }

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
		openConfrim(state) {
			state.showConfirm = true
		},
		closeConfirm(state) {
			state.showConfirm = false
		},
		openCart(state) {
			state.showCart = true
			console.log('dziza')
		},
		closeCart(state) {
			state.showCart = false
		}
	},
})

export const popupActions = popupSlice.actions

export default popupSlice
