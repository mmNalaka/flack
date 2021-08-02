import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'

import 'firebase/auth'
import 'firebase/firestore'
import firebase from 'firebase/app'
import { firebaseConfig } from './config/firebase-config'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

import { App } from './App'
import { store } from './store'
import './styles/main.css'

firebase.initializeApp(firebaseConfig)
firebase.firestore()

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
}

const rrfProps = {
  firebase,
  dispatch: store.dispatch,
  config: rrfConfig,
  createFirestoreInstance,
}

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
