import React, { FC } from 'react'
import { makeLoginValidation } from './login-validation-factory'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remote-authentication-factory'
import { Login } from '@/presentation/pages'

export const makeLogin: FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
    />
  )
}
