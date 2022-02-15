import uniqid from 'uniqid'
import { useTranslation } from 'react-i18next'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  const { t } = useTranslation()
  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>{t("skills")}</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
