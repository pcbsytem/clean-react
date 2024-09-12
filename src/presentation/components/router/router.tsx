import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
      </Routes>
    </BrowserRouter>
  )
}

export default Router
