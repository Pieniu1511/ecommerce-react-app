import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function RootLayout() {
	return (
		<>
			<ToastContainer />
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default RootLayout
