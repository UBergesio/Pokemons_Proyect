import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./Form.module.css"

const Form = (props) => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [errors, setErrors] = useState({});
  const [pokeData, setPokeData] = useState({
    nombre: "",
    imagen: "",
    vida: "",
    ataque: "",
    defensa: "",
    velocidad: "", //Si Tiene
    altura: "", //Si tiene
    peso: "", //Si tiene
    tipos: [],
  });

  const handleChange = (event) => {
    setPokeData({ ...pokeData, [event.target.name]: event.target.value });
    setErrors();
  };

  // Función para manejar los cambios en los tipos de Pokémon seleccionados
  const handleTypeChange = (event) => {
    const typeName = event.target.value;
    const isChecked = event.target.checked;

    // Usamos la función de actualización del estado para obtener el estado más reciente
    setSelectedTypes((prevSelectedTypes) => {
      if (isChecked) {
        // Si se marca un tipo, lo agregamos al array de tipos seleccionados
        return [...prevSelectedTypes, typeName];
      } else {
        // Si se desmarca un tipo, lo eliminamos del array de tipos seleccionados
        return prevSelectedTypes.filter((type) => type !== typeName);
      }
    });
  };

  const dispatch = useDispatch();


  //useEffect para que se actualice el estado de pokeData.tipos cada vez que se marca o desmarca un tipoy se le asigna selectedTypes
    useEffect(() => {
      setPokeData({ ...pokeData, tipos: selectedTypes });
    }, [selectedTypes]);

  const handleCreate = (event) => {
    event.preventDefault();
    const pokemonData = {
      ...pokeData,
      tipos: selectedTypes,
    };
  };

  return (
    <div className={style.container}>
      <h1>Crea tu propio Pokemon!</h1>
      <form action="">
        <label htmlFor="" className={style.label}>
          Nombre:
        </label>
        <input
          type="text"
          placeholder="PokeNombre"
          value={pokeData.nombre}
          name="nombre"
          onChange={handleChange}
          className={style.input}
        />

        <label htmlFor="" className={style.label}>
          Imagen:
        </label>
        <input
          type="text"
          placeholder="PokeImagen"
          value={pokeData.imagen}
          name="imagen"
          onChange={handleChange}
          className={style.input}
        />

        <label htmlFor="" className={style.label}>
          Vida:
        </label>
        <input
          type="text"
          placeholder="PokeVida"
          value={pokeData.vida}
          name="vida"
          onChange={handleChange}
          className={style.input}
        />

        <label htmlFor="" className={style.label}>
          Ataque:
        </label>
        <input
          type="text"
          placeholder="PokeAtaque"
          value={pokeData.ataque}
          name="ataque"
          onChange={handleChange}
          className={style.input}
        />

        <label htmlFor="" className={style.label}>
          Defensa:
        </label>
        <input
          type="text"
          placeholder="PokeDefensa"
          value={pokeData.defensa}
          name="defensa"
          onChange={handleChange}
          className={style.input}
        />

        <label htmlFor="" className={style.label}>
          Velocidad:
        </label>
        <input
          type="text"
          placeholder="PokeVelocidad"
          value={pokeData.velocidad}
          name="velocidad"
          onChange={handleChange}
          className={style.input}
        />

        <label htmlFor="" className={style.label}>
          Altura:
        </label>
        <input
          type="text"
          placeholder="PokeAltura"
          value={pokeData.altura}
          name="altura"
          onChange={handleChange}
          className={style.input}
        />

        <label htmlFor="" className={style.label}>
          Peso:
        </label>
        <input
          type="text"
          placeholder="PokePeso"
          value={pokeData.peso}
          name="peso"
          onChange={handleChange}
          className={style.input}
        />

        <label htmlFor="tipos" className={style.label}>
          Tipos:
        </label>
        {props.types.map((type) => (
          <label key={type} style={{ marginRight: "10px" }}>
            <input
              className={style.selected}
              type="checkbox"
              value={type}
              checked={selectedTypes.includes(type)}
              onChange={(event) => {
                handleTypeChange(event);
              }}
            />
            {type}
          </label>
        ))}
      </form>
    </div>
  );
};

export default Form;
