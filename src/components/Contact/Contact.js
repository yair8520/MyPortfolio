import Avatar from '@mui/material/Avatar'
import { useTranslation } from 'react-i18next'
import im from'../../static/images/call.png'
import { contact } from '../../portfolio'
import './Contact.css'
import SocialIcon from '../../SocialIcon/SocialIcon'

const Contact = () => {
  if (!contact.email) return null
  const { t } = useTranslation()

  return (
    <section className='section contact center' id='contact'>
      <Avatar src={im} sx={{ width: 100, height: 100 }} />
      <h2 className='section__title'>{t("contact")}</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
        {t("email")}
        </span>
      </a>
      <SocialIcon/>
    </section>
  )
}

export default Contact
