import React, { FC, useContext } from 'react'
import Spinner from '../spinner/spinner'
import Context from '@/presentation/contexts/form/form-context'
import './form-status-styles.scss'

const FormStatus: FC = () => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state
  return (
    <div data-testid='error-wrap' className='errorWrap'>
      {isLoading && <Spinner className='spinnerOut' />}
      {mainError && <span className='error'>{mainError}</span>}
    </div>
  )
}

export default FormStatus
