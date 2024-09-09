import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Footer,
  Input,
  FormStatus,
  LoginHeader
} from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import './signup-styles.scss'

const SignUp: FC = () => {
  const [state] = useState({
    isLoading: false,
    nameError: 'Campo obrigatório',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: ''
  })
  const navigate = useNavigate()
  return (
    <div className='login'>
      <LoginHeader />
      <Context.Provider value={{ state }}>
        <form data-testid='form' className='form'>
          <h2>Criar Conta</h2>

          <Input type='text' name='name' placeholder='Digite seu nome' />
          <Input type='email' name='email' placeholder='Digite seu e-mail' />
          <Input
            type='password'
            name='password'
            placeholder='Digite sua senha'
          />
          <Input
            type='password'
            name='passwordConfirmation'
            placeholder='Repita sua senha'
          />

          <button
            data-testid='submit'
            disabled
            className='submit'
            type='submit'
          >
            Entrar
          </button>
          <span
            data-testid='signup'
            className='link'
            onClick={() => {
              navigate('/signup')
            }}
          >
            Voltar Para Login
          </span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default SignUp
