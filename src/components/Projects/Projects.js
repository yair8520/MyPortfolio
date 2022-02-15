import uniqid from 'uniqid'
import { useTranslation } from 'react-i18next'

import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  const { t } = useTranslation()

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>{t('projects')}</h2>

      <div className='projects__grid'>
        {t('projectsMap').map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
