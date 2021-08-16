import React, { useContext } from 'react';
import { ThemeContext } from '../../state/ThemeContext';
import style from './Header.css';

const Header = () => {
  const { toggle, toggleFunction } = useContext(ThemeContext);

  return (
    <div style={toggle ? { background: 'blue' } : {}}>
      <h1>Toggle Toggle Toggle</h1>
      <label className={style.switch}>
        <input type="checkbox" onClick={toggleFunction} />
        <span className={style.slider}></span>
      </label>
    </div>
  );
};

export default Header;

