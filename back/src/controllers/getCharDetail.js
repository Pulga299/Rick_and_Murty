const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/"

getCharDetail = (req, res) => {
  const { detailId } = req.params
  axios(URL + detailId).then(
    (response) => {
      const character = {
        id: response.data.id,
        image: response.data.image,
        name: response.data.name,
        gender: response.data.gender,
        species: response.data.species,
        status: response.data.status,
        origin: response.data.origin.name,
      }
      res.status(200).json(character);
    }, (error) => res.status(500).json(error.message)
  )
};



module.exports = { getCharDetail };

