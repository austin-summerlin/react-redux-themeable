import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../../state/ThemeContext';
import { fetchFuturamaCharacters } from '../../services/futuramaApi';
import CharacterList from '../presentation/CharactersList';

const Main = () => {

  const [characters, setCharacters] = useState([]);
  const { toggle } = useContext(ThemeContext);

  useEffect(() => {
    fetchFuturamaCharacters()
      .then(characters => {
        setCharacters(characters);
      });
  }, []);

  return (
    <div style={toggle ? { background: 'grey' } : {}}>
      <CharacterList characters={characters} />
    </div>
  );
};

export default Main;
