const axios = require("axios");
const { Pokemon, Pokemon_type } = require("../DB_connection");

const URL = "https://pokeapi.co/api/v2/pokemon/";

const getPokeName = async (req, res) => {
  const { name } = req.query; 
  
  const nameMinuscula = name.toLowerCase()
  
  // ! PARA BUSCAR EN LA API
  try {
    const response = await axios.get(`${URL}${nameMinuscula}`);
    const { data } = response;
    const types = data.types.map((type) => type.type.name).join(", ");
    const objPoke = {
      id: data.id,
      nombre: data.name,
      imagen: data.sprites.other.dream_world.front_default,
      vida: data.stats[0].base_stat,
      ataque: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
      velocidad: data.stats[5].base_stat,
      altura: data.height,
      peso: data.weight,
      Tipos: types,
    };

    // ! PARA BUSCAR EN LA DATABASE
    const searchNameDB = await Pokemon.findOne({
      where: { nombre: nameMinuscula },
      include: {
        model: Pokemon_type,
        attributes: ["nombre"],
        through: {
          attributes: [],
        },
      },
    });

    if (objPoke) {
      res.status(200).json(objPoke);
    } else if (searchNameDB) {
      res.status(200).json(searchNameDB);
    } else {
      res.status(404).send("No existen Pokemons con ese nombre.");
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

module.exports = getPokeName;
