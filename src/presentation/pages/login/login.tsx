import React, { FC, useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Footer,
  Input,
  FormStatus,
  LoginHeader,
  SubmitButton
} from '@/presentation/components'
import { FormContext, ApiContext } from '@/presentation/contexts'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication } from '@/domain/usecases'
import './login-styles.scss'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: FC<Props> = ({ validation, authentication }: Props) => {
  const { setCurrentAccount } = useContext(ApiContext)
  const [state, setState] = useState({
    isLoading: false,
    isFormInvalid: true,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })
  const navigate = useNavigate()

  useEffect(() => {
    const { email, password } = state
    const formData = { email, password }
    const emailError = validation.validate('email', formData)
    const passwordError = validation.validate('password', formData)
    setState({
      ...state,
      emailError,
      passwordError,
      isFormInvalid: !!emailError || !!passwordError
    })
  }, [state.email, state.password])

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    try {
      if (state.isLoading || state.isFormInvalid) {
        return
      }

      setState({ ...state, isLoading: true })
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      setCurrentAccount(account)
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
    <div className='loginWrap'>
      <LoginHeader />
      <FormContext.Provider value={{ state, setState }}>
        <form data-testid='form' className='form' onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type='email' name='email' placeholder='Digite seu e-mail' />
          <Input
            type='password'
            name='password'
            placeholder='Digite sua senha'
          />
          <SubmitButton text='Entrar' />
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
      </FormContext.Provider>
      <Footer />
    </div>
  )
}

export default Login
