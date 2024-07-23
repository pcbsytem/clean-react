import React, { FC, useEffect, useState } from 'react'
import {
  Footer,
  Input,
  FormStatus,
  LoginHeader
} from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import './login-styles.scss'

type Props = {
  validation: Validation
}

const Login: FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    validation.validate('email', state.email)
  }, [state.email])

  useEffect(() => {
    validation.validate('password', state.password)
  }, [state.password])

  return (
    <div className='login'>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className='form'>
          <h2>Login</h2>

          <Input type='email' name='email' placeholder='Digite seu e-mail' />
          <Input
            type='password'
            name='password'
            placeholder='Digite sua senha'
          />

          <button
            data-testid='submit'
            disabled
            className='submit'
            type='submit'
          >
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
