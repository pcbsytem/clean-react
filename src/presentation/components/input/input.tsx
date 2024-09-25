import React, { FC, useContext, useRef } from 'react'
import Context from '@/presentation/contexts/form/form-context'
import './input-styles.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const inputRef = useRef<HTMLInputElement>()
  const error = state[`${props.name}Error`]
  const enableInput = (e: React.FocusEvent<HTMLInputElement>): void => {
    e.target.readOnly = false
  }

  const handleChange = (e: React.FocusEvent<HTMLInputElement>): void => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const getStatus = (): string => {
    return error ? '🔴' : '🟢'
  }

  const getTitle = (): string => {
    return error || 'Tudo certo!'
  }

  return (
    <div className='inputWrap'>
      <input
        {...props}
        ref={inputRef}
        placeholder=''
        data-testid={props.name}
        readOnly
        onFocus={enableInput}
        onChange={handleChange}
      />
      <label
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        {props.placeholder}
      </label>
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
