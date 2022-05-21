import { School } from './School';
import { listSchools } from '../fixtures/schools';

export const Learning = () => (
  <section id='learning' className='Learning'>
    <h2>Learning</h2>
    <h3>What I've studied.</h3>
    <ul>
      {
        listSchools.map(item => (
          <School key={item.title} {...item} />
        ))
      }
    </ul>
  </section>
);