import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD4_3hwnUlrNWs8f2C5cotDpT5giFfR2u0',
  authDomain: 'react-notification-51dd5.firebaseapp.com',
  databaseURL: 'https://react-notification-51dd5-default-rtdb.firebaseio.com',
  projectId: 'react-notification-51dd5',
  storageBucket: 'react-notification-51dd5.appspot.com',
  messagingSenderId: '165989974827',
  appId: '1:165989974827:web:c43039f890add3dc8abb6e',
  measurementId: 'G-HQYSZ27KGL'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth };
