import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './layouts/RootLayout/RootLayout'
import HomePage from './pages/Home/HomePage'
import ContactPage from './pages/Contact/ContactPage'
import LoginPage from './pages/Auth/LoginPage'
import ResetPage from './pages/Auth/ResetPage'
import SignUpPage from './pages/Auth/SignUpPage'
import OrdersHistoryPage from './pages/OrdersHistory/OrdersHistoryPage'
import AdminPage from './pages/Admin/AdminPage'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{ index: true, element: <HomePage /> },
				{ path: 'contact', element: <ContactPage /> },
				{ path: 'login', element: <LoginPage /> },
				{ path: 'reset', element: <ResetPage /> },
				{ path: 'signup', element: <SignUpPage /> },
				{ path: 'orders', element: <OrdersHistoryPage /> },
				{ path: 'admin', element: <AdminPage /> },
			],
		},
	])

	return <RouterProvider router={router} />
}

export default App
