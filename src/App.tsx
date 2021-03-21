import React from 'react'
import { useSelector } from 'react-redux'
import { authSelector } from './features/auth/auth.slice'

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'))
const UnAuthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'))

export const App = () => {
  const { isAuthenticated } = useSelector(authSelector)

  return (
    <React.Suspense fallback={<div>loading</div>}>
      {isAuthenticated ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </React.Suspense>
  )
}
