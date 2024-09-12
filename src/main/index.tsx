import React from 'react'
import { createRoot } from 'react-dom/client'
import Router from '@/presentation/components/router/router'
import '@/presentation/styles/global.scss'
import { makeLogin } from './factories/pages/login/login-factory'
import { makeSignUp } from './factories/pages/signup/signup-factory'

const root = createRoot(document.getElementById('main'))
root.render(
  <React.StrictMode>
    <Router MakeLogin={makeLogin} MakeSignUp={makeSignUp} />
  </React.StrictMode>
)
