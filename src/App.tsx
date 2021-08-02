import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './store/root-reducer'

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'))
const UnAuthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'))

export const App = () => {
  const { isLoaded, isEmpty } = useSelector(
    (state: RootState) => state.firebase.auth,
  )

  return (
    <React.Suspense fallback={<div>loading</div>}>
      {isLoaded && !isEmpty ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </React.Suspense>
  )
}
