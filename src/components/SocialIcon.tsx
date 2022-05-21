import { SocialInterface } from '../interfaces/interfaces';

export const SocialIcon = ({ title, name, url }: SocialInterface) => (
  <a
    className={name}
    title={title}
    href={url}
    target='_blank'
    rel='noreferrer'
  > </a>
);
