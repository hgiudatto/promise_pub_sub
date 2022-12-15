import axios from "axios";

const getCharacter = async (characterId) => {
  try {
    const result = await axios.get(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );

    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const character = await getCharacter(1);
console.log(character);
