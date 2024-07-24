import React, { FC } from 'react'
import './spinner-styles.scss'

type Props = {
  className?: string
}

const Spinner: FC<Props> = ({ className }) => {
  return (
    <div data-testid='spinner' className={`spinner ${className}`}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default Spinner
