import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignUp } from '@/presentation/pages'

type Props = {
  MakeLogin: FC
}

const Router: FC<Props> = ({ MakeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<MakeLogin />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
