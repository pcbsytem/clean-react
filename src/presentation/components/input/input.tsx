import React, { FC, useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'
import './input-styles.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context)
  const error = errorState[props.name]
  const enableInput = (e: React.FocusEvent<HTMLInputElement>): void => {
    e.target.readOnly = false
  }

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <div className='inputWrap'>
      <input {...props} readOnly onFocus={enableInput} />
      <span
        data-testid={`${props.name}-status`}
        title={getTitle()}
        className='status'
      >
        {getStatus()}
      </span>
    </div>
  )
}

export default Input
