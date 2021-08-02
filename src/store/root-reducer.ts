import { combineReducers } from '@reduxjs/toolkit'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

import { authSlice } from '../features/auth/auth.slice'

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  firebase: firebaseReducer,
  fireStore: firestoreReducer,
})

export type RootState = ReturnType<typeof rootReducer>
