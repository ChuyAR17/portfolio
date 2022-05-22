import { MenuOption } from './MenuOption';
import { menuOptions } from '../fixtures/menuOptions';
import { MenuInterface } from '../interfaces/interfaces';

export const Menu = ({ toggleMenu, setToggleMenu }: MenuInterface) => (
  <div className={`Menu Menu__${toggleMenu ? 'open' : 'closed'}`}>
    <ul>
      {
        menuOptions.map(item => (
          <MenuOption
            key={item.name}
            name={item.name}
            link={item.link}
            setToggleMenu={setToggleMenu}
            toggleMenu={toggleMenu}
          />
        ))
      }
    </ul>
  </div>
);
