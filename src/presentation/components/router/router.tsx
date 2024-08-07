import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

type Props = {
  MakeLogin: FC
}

const Router: FC<Props> = ({ MakeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<MakeLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
