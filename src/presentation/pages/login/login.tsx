import React, { FC } from 'react'
import Spinner from '@/presentation/components/spinner/spinner'
import Logo from '@/presentation/components/logo/logo'
import './login-styles.scss'

const Login: FC = () => {
  return (
    <div className='login'>
      <header className='header'>
        <Logo />
        <h1>4Dev - Enquetes para Programadores</h1>
      </header>
      <form className='form'>
        <h2>Login</h2>

        <div className='inputWrap'>
          <input type='email' name='email' placeholder='Digite seu e-mail' />
          <span className='status'>🔴</span>
        </div>
        <div className='inputWrap'>
          <input
            type='password'
            name='password'
            placeholder='Digite sua senha'
          />
          <span className='status'>🔴</span>
        </div>

        <button className='submit' type='submit'>
          Entrar
        </button>
        <span className='link'>Criar conta</span>
        <div className='errorWrap'>
          <Spinner className='spinnerOut' />
          <span className='error'>Error</span>
        </div>
      </form>
      <footer className='footer' />
    </div>
  )
}

export default Login
