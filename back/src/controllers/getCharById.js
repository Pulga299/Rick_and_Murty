const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/"

getCharById = (req, res) => {
  const { id } = req.params
  axios(URL + id).then(
    (response) => {
      const character = {
        id: response.data.id,
        image: response.data.image,
        name: response.data.name,
        gender: response.data.gender,
        species: response.data.species,
      }
      res.status(200).json(character);
    }, (error) => res.status(500).json(error.message)
  )
};



module.exports = { getCharById };
