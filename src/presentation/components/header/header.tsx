import React, { memo } from 'react'
import { Logo } from '@/presentation/components'
import './header.styles.scss'

const Header: React.FC = () => {
  return (
    <header className='headerWrap'>
      <div className='headerContent'>
        <Logo />
        <div className='logoutWrap'>
          <span>Patrick</span>
          <a href='#'>Sair</a>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
