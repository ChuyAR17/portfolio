import { SocialIcon } from './SocialIcon';
import { accounts } from '../fixtures/accounts';

export const Social = () => (
  <div className='Layout__social'>
    {
      accounts.map(item => (
        <SocialIcon key={item.title} {...item} />
      ))
    }
  </div>
);