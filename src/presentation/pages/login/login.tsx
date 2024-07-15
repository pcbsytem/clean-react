import React, { FC } from 'react'
import Spinner from '@/presentation/components/spinner/spinner'
import Header from '@/presentation/components/login-header/login-header'
import Footer from '@/presentation/components/footer/footer'
import './login-styles.scss'
import Input from '@/presentation/components/input/input'

const Login: FC = () => {
  return (
    <div className='login'>
      <Header />
      <form className='form'>
        <h2>Login</h2>

        <Input type='email' name='email' placeholder='Digite seu e-mail' />
        <Input type='password' name='password' placeholder='Digite sua senha' />

        <button className='submit' type='submit'>
          Entrar
        </button>
        <span className='link'>Criar conta</span>
        <div className='errorWrap'>
          <Spinner className='spinnerOut' />
          <span className='error'>Error</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login
