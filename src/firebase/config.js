import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
export const firebaseConfig = {
	apiKey: 'AIzaSyCK36V--VsxYPQB_HrjwALA-z9pz6z9Gk0',
	authDomain: 'ecommerce-react-app-75d21.firebaseapp.com',
	projectId: 'ecommerce-react-app-75d21',
	storageBucket: 'ecommerce-react-app-75d21.appspot.com',
	messagingSenderId: '398497216840',
	appId: '1:398497216840:web:62ae865a3d5d18e3d39b7d',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
