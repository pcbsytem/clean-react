import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SurveyList } from '@/presentation/pages'

type Factory = {
  MakeLogin: FC
  MakeSignUp: FC
}

const Router: FC<Factory> = ({ MakeLogin, MakeSignUp }: Factory) => {
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
