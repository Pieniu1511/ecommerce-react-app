import { createSlice } from '@reduxjs/toolkit'

const loginState = { isLoggedIn: false, email: null, userName: null, userId: null }

const loginSlice = createSlice({
	name: 'login',
	initialState: loginState,
	reducers: {
		logIn(state) {
			state.isLoggedIn = true
		},
		logOut(state) {
			state.isLoggedIn = false
		},
		setActiveUser(state, action) {
			const { email, userName, userId } = action.payload
			state.isLoggedIn = true
			state.email = email
			state.userName = userName
			state.userId = userId
		},
		removeActiveUser(state, action) {
			state.isLoggedIn = false
			state.email = null
			state.userName = null
			state.userId = null
		},
	},
})

export const loginActions = loginSlice.actions

export const selectEmail = state => state.login.email
export const selectUserName = state => state.login.userName
export const selectUserId = state => state.login.userId

export default loginSlice
