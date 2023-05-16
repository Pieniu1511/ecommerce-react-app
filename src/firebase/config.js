import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
export const firebaseConfig = {
	// apiKey: 'AIzaSyCK36V--VsxYPQB_HrjwALA-z9pz6z9Gk0',
	// authDomain: 'ecommerce-react-app-75d21.firebaseapp.com',
	// projectId: 'ecommerce-react-app-75d21',
	// storageBucket: 'ecommerce-react-app-75d21.appspot.com',
	// messagingSenderId: '398497216840',
	// appId: '1:398497216840:web:62ae865a3d5d18e3d39b7d',
	apiKey: 'AIzaSyCD562iZEcfCSaUPcCA1R2Kw5voESRtkHg',
	authDomain: 'react-ecommerce-app-50dab.firebaseapp.com',
	projectId: 'react-ecommerce-app-50dab',
	storageBucket: 'react-ecommerce-app-50dab.appspot.com',
	messagingSenderId: '318599541733',
	appId: '1:318599541733:web:0a8cbc26631913f920350c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
