import React, { FC, memo } from 'react'
import Logo from '../logo/logo'
import './login-header-styles.scss'

const LoginHeader: FC = () => {
  return (
    <header className='headerWrap'>
      <Logo />
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
  )
}

export default memo(LoginHeader)
