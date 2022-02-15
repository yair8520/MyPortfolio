import uniqid from 'uniqid'
import { useTranslation } from 'react-i18next'
import { Technologies, Tech, TechImg, TechName } from './style'
import stackList from './skillsIcons'

const Skills = () => {
  const { t } = useTranslation()
  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>{t('skills')}</h2>
      <Technologies>
        {stackList.map((stack) => (
          <Tech key={uniqid()} className='tech'>
            <TechImg src={stack.img} alt={stack.name} />
            <TechName>{stack.name}</TechName>
          </Tech>
        ))}
      </Technologies>
    </section>
  )
}

export default Skills
