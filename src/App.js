import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './components/rootLayout/RootLayout'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{ index: true, element: <Home /> },
				{ path: 'contact', element: <Contact /> },
			],
		},
	])

	return <RouterProvider router={router} />
}

export default App
