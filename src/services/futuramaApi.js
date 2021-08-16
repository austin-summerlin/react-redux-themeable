/* eslint-disable max-len */
export const fetchFuturamaCharacters = async () => {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
  const characters = await res.json();

  return characters.map(({ PicUrl, Name }) => ({
    name: Name,
    image: PicUrl,
  }));
};
