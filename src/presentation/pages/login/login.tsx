import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Footer,
  Input,
  FormStatus,
  LoginHeader
} from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication, SaveAccessToken } from '@/domain/usecases'
import './login-styles.scss'

type Props = {
  validation: Validation
  authentication: Authentication
  saveAccessToken: SaveAccessToken
}

const Login: FC<Props> = ({
  validation,
  authentication,
  saveAccessToken
}: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })
  const navigate = useNavigate()

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    try {
      if (state.isLoading || state.emailError || state.passwordError) {
        return
      }

      setState({ ...state, isLoading: true })
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      await saveAccessToken.save(account.accessToken)
      navigate('/', { replace: true })
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message
      })
    }
  }

  return (
    <div className='login'>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form data-testid='form' className='form' onSubmit={handleSubmit}>
          <h2>Login</h2>

          <Input type='email' name='email' placeholder='Digite seu e-mail' />
          <Input
            type='password'
            name='password'
            placeholder='Digite sua senha'
          />

          <button
            data-testid='submit'
            disabled={!!state.emailError || !!state.passwordError}
            className='submit'
            type='submit'
          >
            Entrar
          </button>
          <span
            data-testid='signup-link'
            className='link'
            onClick={() => {
              navigate('/signup')
            }}
          >
            Criar conta
          </span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
