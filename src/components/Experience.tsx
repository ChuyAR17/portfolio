import { WorkPlace } from './WorkPlace';
import { listJobs } from '../fixtures/jobs';

export const Experience = () => (
  <section id='experience' className='Experience Section'>
    <h2>Experience</h2>
    <h3>Where I've worked.</h3>
    <ul>
      {
        listJobs.map(item => (
          <WorkPlace key={item.companyName} {...item} />
        ))
      }
    </ul>
  </section>
);
