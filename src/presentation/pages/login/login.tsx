import React, { FC, useState } from 'react'
import {
  Footer,
  Input,
  FormStatus,
  LoginHeader
} from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import './login-styles.scss'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Login: FC = () => {
  const [state, setState] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className='login'>
      <LoginHeader />
      <Context.Provider value={state}>
        <form className='form'>
          <h2>Login</h2>

          <Input type='email' name='email' placeholder='Digite seu e-mail' />
          <Input
            type='password'
            name='password'
            placeholder='Digite sua senha'
          />

          <button className='submit' type='submit'>
            Entrar
          </button>
          <span className='link'>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
