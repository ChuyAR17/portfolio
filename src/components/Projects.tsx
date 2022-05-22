import { ProjectCard } from './ProjectCard';
import { listProjects } from '../fixtures/projects';

export const Projects = () => (
  <section id='projects' className='Projects Section'>
    <h2>Projects</h2>
    <h3>What I've done.</h3>
    {
      listProjects.map(item => (
        <ProjectCard key={item.name} {...item} />
      ))
    }
  </section>
);