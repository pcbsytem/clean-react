import React from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from '@/presentation/components'
import '@/presentation/styles/global.scss'
import { makeLogin } from './factories/pages/login/login-factory'

const root = createRoot(document.getElementById('main'))
root.render(
  <React.StrictMode>
    <Router MakeLogin={makeLogin} />
  </React.StrictMode>
)
