import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

const CharacterList = ({ characters }) => {

  return (
    <div>
      <ul aria-label="character-list">
        {characters.map(character => (<Character key={character.name}
          name={character.name} image={character.image} />))}
      </ul>
    </div>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired
};

export default CharacterList;
