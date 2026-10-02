import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDurQXhQqpsR1JedG96mGoWJA5RNKZNzRk",
  authDomain: "sms-app-auth-fc2a1.firebaseapp.com",
  projectId: "sms-app-auth-fc2a1",
  storageBucket: "sms-app-auth-fc2a1.firebasestorage.app",
  messagingSenderId: "333110181848",
  appId: "1:333110181848:web:5bb59edc46b03187573cad",
  measurementId: "G-M4MLF96DK7"
};

const firebaseapp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseapp)

const google = new GoogleAuthProvider()

export {auth, google}