import React, { FC } from 'react'
import './survey-list-styles.scss'
import { Header, Footer, Icon, IconName } from '@/presentation/components'

const SurveyList: FC = () => {
  return (
    <div className='surveyListWrap'>
      <Header />
      <div className='contentWrap'>
        <h2>Enquete</h2>
        <ul>
          <li>
            <div className='surveyContent'>
              <Icon
                className={'iconSurveyWrap'}
                iconName={IconName.thumbDown}
              />
              <time>
                <span className='day'>10</span>
                <span className='month'>10</span>
                <span className='year'>2024</span>
              </time>
              <p>Qual é seu framework web favorito?</p>
            </div>
            <footer>Ver Resultado</footer>
          </li>
          <li></li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList
