import { useContext, useState, useEffect } from 'react'

import Avatar from '@mui/material/Avatar'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

import { ThemeContext } from '../../contexts/theme'

import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const { t } = useTranslation()

  const toggleNavList = () => setShowNavList(!showNavList)

  const changetoEn = () => {
    i18next.changeLanguage('en')
  }
  const changetoHe = () => {
    i18next.changeLanguage('he')
  }
  useEffect(() => {
    console.log(t('welcome'))
  })
  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <li className='nav__list-item'>
          <a
            href='#projects'
            onClick={toggleNavList}
            className='link link--nav'
          >
            {t('projects')}
          </a>
        </li>
        <li className='nav__list-item'>
          <a href='#skills' onClick={toggleNavList} className='link link--nav'>
            {t('skills')}
          </a>
        </li>
        <li className='nav__list-item'>
          <a href='#contact' onClick={toggleNavList} className='link link--nav'>
             {t('contact')}
          </a>
        </li>
      </ul>
      

      <button
        type='button'
        onClick={changetoHe}
        id='changeToHe'
        name='he'
        className='btn btn--icon nav__theme'
        aria-label='toggle navigation'
      >
        <Avatar
          src='https://catamphetamine.gitlab.io/country-flag-icons/3x2/IL.svg'
          sx={{ width: 25, height: 25 }}
        />
      </button>
      <button
        type='button'
        onClick={changetoEn}
        id='changeToEn'
        name='en'
        className='btn btn--icon nav__theme'
        aria-label='toggle language'
      >
        <Avatar
          src='https://catamphetamine.gitlab.io/country-flag-icons/3x2/GB.svg'
          sx={{ width: 25, height: 25 }}
        />
      </button>
      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
