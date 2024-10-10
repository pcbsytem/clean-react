import React, { FC } from 'react'
import { Logo } from '@/presentation/components'
import './survey-list-styles.scss'
import Footer from '@/presentation/components/footer/footer'

const SurveyList: FC = () => {
  return (
    <div className='surveyListWrap'>
      <header className='headerWrap'>
        <div className='headerContent'>
          <Logo />
          <div className='logoutWrap'>
            <span>Patrick</span>
            <a href='#'>Sair</a>
          </div>
        </div>
      </header>
      <div className='contentWrap'>
        <h2>Enquete</h2>
        <ul>
          <li>
            <div className='surveyContent'>
              <time>
                <span className='day'>10</span>
                <span className='month'>10</span>
                <span className='year'>2024</span>
              </time>
              <p>Qual é seu framework web favorito?</p>
            </div>
            <footer>Ver Resultado</footer>
          </li>
          <li>
            <div className='surveyContent'>
              <time>
                <span className='day'>10</span>
                <span className='month'>10</span>
                <span className='year'>2024</span>
              </time>
              <p>Qual é seu framework web favorito?</p>
            </div>
            <footer>Ver Resultado</footer>
          </li>
          <li>
            <div className='surveyContent'>
              <time>
                <span className='day'>10</span>
                <span className='month'>10</span>
                <span className='year'>2024</span>
              </time>
              <p>Qual é seu framework web favorito?</p>
            </div>
            <footer>Ver Resultado</footer>
          </li>
          <li>
            <div className='surveyContent'>
              <time>
                <span className='day'>10</span>
                <span className='month'>10</span>
                <span className='year'>2024</span>
              </time>
              <p>Qual é seu framework web favorito?</p>
            </div>
            <footer>Ver Resultado</footer>
          </li>
          <li>
            <div className='surveyContent'>
              <time>
                <span className='day'>10</span>
                <span className='month'>10</span>
                <span className='year'>2024</span>
              </time>
              <p>Qual é seu framework web favorito?</p>
            </div>
            <footer>Ver Resultado</footer>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList
