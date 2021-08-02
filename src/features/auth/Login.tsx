import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import { Button } from '../../components/elements/Button'
import { useFirebase } from 'react-redux-firebase'

export const Login = () => {
  const firebase = useFirebase()

  const handleGoogleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    firebase.login({
      provider: 'google',
      type: 'popup',
    })
  }

  return (
    <div className="flex flex-col items-center">
      <Button
        icon={<FcGoogle />}
        onClick={handleGoogleLoginClick}
        className="max-w-xs justify-center w-full"
      >
        Login with Google
      </Button>
      <Button
        icon={<FaFacebookF />}
        className="bg-blue-700 text-white w-full max-w-xs justify-center"
      >
        Login with Facebook
      </Button>
    </div>
  )
}
