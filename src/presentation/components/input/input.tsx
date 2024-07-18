import React, { FC, useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'
import './input-styles.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]
  const enableInput = (e: React.FocusEvent<HTMLInputElement>): void => {
    e.target.readOnly = false
  }

  const handleChange = (e: React.FocusEvent<HTMLInputElement>): void => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <div className='inputWrap'>
      <input
        {...props}
        data-testid={props.name}
        readOnly
        onFocus={enableInput}
        onChange={handleChange}
      />
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
