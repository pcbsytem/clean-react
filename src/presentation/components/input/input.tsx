import React, { FC } from 'react'
import './input-styles.scss'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input: FC<Props> = (props) => {
  return (
    <div className='inputWrap'>
      <input {...props} />
      <span className='status'>🔴</span>
    </div>
  )
}

export default Input
