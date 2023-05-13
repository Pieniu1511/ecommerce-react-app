import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './components/RootLayout/RootLayout'
import HomePage from './pages/Home/HomePage'
import ContactPage from './pages/Contact/ContactPage'
import LoginPage from './pages/Auth/LoginPage'
import ResetPage from './pages/Auth/ResetPage'
import SignUpPage from './pages/Auth/SignUpPage'
import OrdersHistoryPage from './pages/OrdersHistory/OrdersHistoryPage'

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
			],
		},
	])

	return <RouterProvider router={router} />
}

export default App
