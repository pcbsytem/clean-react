import React, { FC } from 'react'
import './input-styles.scss'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input: FC<Props> = (props) => {
  const enableInput = (e: React.FocusEvent<HTMLInputElement>): void => {
    e.target.readOnly = false
  }

  return (
    <div className='inputWrap'>
      <input {...props} readOnly onFocus={enableInput} />
      <span className='status'>🔴</span>
    </div>
  )
}

export default Input
