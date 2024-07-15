import React, { FC } from 'react'
import Spinner from '../spinner/spinner'
import './form-status-styles.scss'

const FormStatus: FC = () => {
  return (
    <div className='errorWrap'>
      <Spinner className='spinnerOut' />
      <span className='error'>Error</span>
    </div>
  )
}

export default FormStatus
