import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../store/root-reducer'

export type AuthError = {
  code: number
  message: string
}

export type User = {
  id: string
  name: string
  email: string
  profileImg: string
}
export interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  authUser: User | null
  error: AuthError | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  authUser: null,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
    setAuthSuccess: (state, { payload }: PayloadAction<User>) => {
      state.authUser = payload
      state.isAuthenticated = true
    },
    setLogout: (state) => {
      state.authUser = null
      state.isAuthenticated = false
    },
    setAuthError: (state, { payload }: PayloadAction<AuthError>) => {
      state.error = payload
    },
  },
})

export const authSelector = (state: RootState) => state.auth
export const {
  setLoading,
  setAuthSuccess,
  setLogout,
  setAuthError,
} = authSlice.actions
