import { MenuOptionInterface } from '../interfaces/interfaces';

export const MenuOption = ({ name, link, toggleMenu, setToggleMenu }: MenuOptionInterface) => (
  <li>
    <a onClick={() => setToggleMenu(!toggleMenu)} href={link}>{name}</a>
  </li>
);
