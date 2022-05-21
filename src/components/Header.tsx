import { useState } from 'react';

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className='Header'>
      {
        toggleMenu
          ? <i className='Header__menu Header__menu-open' onClick={() => setToggleMenu(!toggleMenu)} />
          : <i className='Header__menu Header__menu-closed' onClick={() => setToggleMenu(!toggleMenu)} />
      }
      <div className='Header__divider'></div>
      <i className='Header__logo' />
      <div className={`Menu Menu__${toggleMenu ? 'open' : 'closed'}`}>
        <ul>
          <li>
            <a onClick={() => setToggleMenu(!toggleMenu)} href='#about'>About</a>
          </li>
          <li>
            <a onClick={() => setToggleMenu(!toggleMenu)} href='#experience'>Experience</a>
          </li>
          <li>
            <a onClick={() => setToggleMenu(!toggleMenu)} href='#projects'>Projects</a>
          </li>
          <li>
            <a onClick={() => setToggleMenu(!toggleMenu)} href='#learning'>Learning</a>
          </li>
        </ul>
      </div>
    </header>
  )
}
