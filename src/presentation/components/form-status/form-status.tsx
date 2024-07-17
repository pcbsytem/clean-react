import React, { FC, useContext } from 'react'
import Spinner from '../spinner/spinner'
import Context from '@/presentation/contexts/form/form-context'
import './form-status-styles.scss'

const FormStatus: FC = () => {
  const { state, errorState } = useContext(Context)
  return (
    <div data-testid='error-wrap' className='errorWrap'>
      {state.isLoading && <Spinner className='spinnerOut' />}
      {errorState.main && <span className='error'>{errorState.main}</span>}
    </div>
  )
}

export default FormStatus
