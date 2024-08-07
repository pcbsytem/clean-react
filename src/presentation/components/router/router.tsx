import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '@/presentation/pages'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' Component={Login} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
