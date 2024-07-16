import React, { FC, useContext } from 'react'
import Spinner from '../spinner/spinner'
import Context from '@/presentation/contexts/form/form-context'
import './form-status-styles.scss'

const FormStatus: FC = () => {
  const { isLoading, errorMessage } = useContext(Context)
  return (
    <div data-testid='error-wrap' className='errorWrap'>
      {isLoading && <Spinner className='spinnerOut' />}
      {errorMessage && <span className='error'>{errorMessage}</span>}
    </div>
  )
}

export default FormStatus
