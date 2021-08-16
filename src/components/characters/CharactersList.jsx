import React from 'react';
import { useCharacters } from '../../state/CharacterProvider';
import Character from './Character';

const CharacterList = () => {
  const characters = useCharacters();

  const charactersElement = characters.map((character) => (
    <li key={characters.name}>
      <Character {...character} />
    </li>
  ));

  return <ul>{charactersElement}</ul>;
};

export default CharacterList;
