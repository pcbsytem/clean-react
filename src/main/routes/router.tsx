import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SurveyList } from '@/presentation/pages'
import { makeLogin as MakeLogin } from '@/main/factories/pages/login/login-factory'
import { makeSignUp as MakeSignUp } from '@/main/factories/pages/signup/signup-factory'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<MakeLogin />} />
        <Route path='/signup' element={<MakeSignUp />} />
        <Route path='/' element={<SurveyList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
