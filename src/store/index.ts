import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './root-reducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: [],
})

export type DispatchType = typeof store.dispatch
