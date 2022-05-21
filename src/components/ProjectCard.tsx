import { ProjectInterface } from '../interfaces/interfaces';

export const ProjectCard = ({ name, description, imgUrl, github, web }: ProjectInterface) => (
  <div className='Projects__card'>
    <img alt={name} src={imgUrl} />
    <h4>{name}</h4>
    <p>{description}</p>
    <div className='Projects__card-footer'>
      <a href={github} target='_blank' rel='noreferrer'>Github Repo</a>
      <a href={web} target='_blank' rel='noreferrer'>Website</a>
    </div>
  </div>
);
