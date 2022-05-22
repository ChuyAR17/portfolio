import { useState } from 'react';
import { Menu } from './Menu';

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className='Header'>
      <i
        onClick={() => setToggleMenu(!toggleMenu)}
        className={`Header__menu Header__menu-${toggleMenu ? 'open' : 'closed'}`}
      />
      <div className='Header__divider'></div>
      <i className='Header__logo' />
      <Menu
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
    </header>
  )
}
