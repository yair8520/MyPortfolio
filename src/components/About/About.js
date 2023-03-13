import Avatar from '@mui/material/Avatar'
import Slide from 'react-reveal/Slide'

import Typed from 'react-typed'
import { useTranslation } from 'react-i18next'
import { about } from '../../portfolio'
import im from '../../static/images/comp.png'
import cv from '../../static/images/YairGabay.CV.pdf'
import './About.css'

const About = () => {
  const { role } = about
  const { t } = useTranslation()
  return (
    <div className='about center'>
      <Slide top>
        <h1>
          {t('welcome')} <span className='about__name'> {t('name')}.</span>
        </h1>
      </Slide>

      <Avatar src={im} sx={{ width: 100, height: 100 }} />
      {/* <h4 className='about__role'>{t('lookingFor')}</h4> */}
      <h2 className='about__role'>
        <Typed strings={[...role]} typeSpeed={100} />
      </h2>

      <p className='about__desc'>{t('description')}</p>

      <div className='about__contact center'>
        <a href={cv} download="YairGabay.CV.pdf">
          <span type='button' className='btn btn--outline'>
            {t('resume')}
          </span>
        </a>
      </div>
    </div>
  )
}

export default About
