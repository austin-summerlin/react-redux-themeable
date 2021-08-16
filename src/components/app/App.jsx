import React, { useContext } from 'react';
import Main from '../containers/Main';
import Header from '../presentation/Header';
import { ThemeContext } from '../../state/ThemeContext';

export default function App() {
  const { toggle } = useContext(ThemeContext);
  return (
    <div className={toggle ? 'darkMode' : 'lightMode'}>
      <Header />
      <Main />
    </div>
  );
}

