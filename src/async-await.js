const axios = require("axios");

const getCharacter = async (characterId) => {
  try {
    const result = await axios.get(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );

    return result.data;
  } catch (error) {
    return null;
  }
};

async function run() {
  try {
    const character = await getCharacter(1);
    console.log(character);
  } catch (error) {
    console.log(error);
  }
}
