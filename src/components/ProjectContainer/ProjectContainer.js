import uniqid from 'uniqid'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <>
    <div className='project'>
      {project.new && <div className='ribbon right'>{project.new}</div>}

      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  </>
)

export default ProjectContainer
