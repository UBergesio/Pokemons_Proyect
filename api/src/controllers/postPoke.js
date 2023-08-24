const { Pokemon, Pokemon_type } = require("../DB_connection");

const postPoke = async (req, res) => {
  const {
    nombre,
    imagen,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
    tipos,
  } = req.body;

  try {
    if (
      !nombre ||
      !imagen ||
      !vida ||
      !ataque ||
      !defensa ||
      !velocidad ||
      !altura ||
      !peso ||
      !tipos
    ) {
      res.status(400).json({ error: "Faltan datos" });
    } else {
      const randomId = Math.floor(Math.random() * (2000 - 808)) + 808;
      const newPoke = await Pokemon.create({
        id: randomId,
        nombre,
        imagen,
        vida,
        ataque,
        defensa,
        velocidad,
        altura,
        peso,
        tipos,
      });
      await newPoke.addPokemon_types(tipos);

      res.status(201).json(newPoke);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postPoke;
