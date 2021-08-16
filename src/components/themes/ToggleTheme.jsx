/* eslint-disable keyword-spacing */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../state/CharacterProvider';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './Global';
import Toggle from './Toggle';

function ToggleTheme() {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={toggleTheme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default ToggleTheme;
