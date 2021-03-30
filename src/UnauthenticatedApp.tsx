import React from 'react'

import { Container } from './components/layout/Container'
import { Login } from './features/auth/Login'

const UnauthenticatedApp = () => {
  return (
    <Container>
      <Login />
    </Container>
  )
}

export default UnauthenticatedApp
