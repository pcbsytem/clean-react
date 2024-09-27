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

  return (
    <div
      data-testid={`${props.name}-wrap`}
      className='inputWrap'
      data-status={error ? 'invalid' : 'valid'}
    >
      <input
        {...props}
        ref={inputRef}
        title={error}
        placeholder=''
        data-testid={props.name}
        readOnly
        onFocus={enableInput}
        onChange={handleChange}
      />
      <label
        data-testid={`${props.name}-label`}
        title={error}
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
