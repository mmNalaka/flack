import { createSlice } from '@reduxjs/toolkit'

type User = {
  username: string
  name: string
  profilePicture: string
}

interface AuthStet {
  user: User | null
  authenticated: boolean
  error: null | Error
}

const initialState: AuthStet = {
  user: null,
  authenticated: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})
