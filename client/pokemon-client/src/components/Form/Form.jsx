/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import validate from "./validation";
import style from "./Form.module.css";
import { createPoke } from "../redux/actions";

const Form = (props) => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [errors, setErrors] = useState({});
  const [pokeData, setPokeData] = useState({
    nombre: "",
    imagen: "",
    vida: "",
    ataque: "",
    defensa: "",
    velocidad: "",
    altura: "", 
    peso: "", 
    tipos: [],
  });

  const handleChange = (event) => {
    setPokeData({ ...pokeData, [event.target.name]: event.target.value });
    setErrors(
      validate({ ...pokeData, [event.target.name]: event.target.value })
    );
  };

  // ! para manejar los cambios en los tipos de Pokémon seleccionados
  const handleTypeChange = (event) => {
    const typeName = Number(event.target.value); ;
    const isChecked = event.target.checked;

    //actualización del estado para obtener el estado más reciente
    setSelectedTypes((prevSelectedTypes) => {
      if (isChecked) {
        // Si se marca un tipo, lo agrego al array
        return [...prevSelectedTypes, typeName];
      } else {
        // Si se desmarca un tipo, lo elimino del array
        return prevSelectedTypes.filter((type) => type !== typeName);
      }
    });
  };

  const dispatch = useDispatch();

  // ! useEffect para que se actualice el estado de pokeData.tipos cada vez que se marca o desmarca un tipo
  useEffect(() => {
    setPokeData({ ...pokeData, tipos: selectedTypes });
  }, [selectedTypes]);

  const handleCreate = (event) => {
    event.preventDefault();
    const pokemonData = {
      ...pokeData,
      tipos: selectedTypes,
    };
    const hayError = Object.values(errors).filter((error)=>
    error !== "")
    if (hayError.length === 0) {
      dispatch(createPoke(pokemonData));
      setErrors({})
      window.alert("Se creo su pokemon")
    } else{window.alert("Faltan datos para crear")}
  };

  return (
    <div className={style.container}>
      <h1 className={style.h1}>Crea tu propio Pokemon!</h1>
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

        <div className={style.containerTipo}>
          <label htmlFor="tipos" className={style.labelTipo}>
            Tipos:
          </label>
          {props.types.map((typeObject, index) => {
            const typeName = Object.keys(typeObject)[0]; // Obtiene el nombre del tipo
            const typeValue = Object.values(typeObject)[0]; // Obtiene el valor numérico del tipo

            return (
              <label className={style.labelSelect} key={index}>
                <input
                  className={style.selected}
                  type="checkbox"
                  value={typeValue}
                  checked={selectedTypes.includes(Number(typeValue))}
                  onChange={(event) => {
                    handleTypeChange(event);
                  }}
                />
                {typeName}
              </label>
            );
          })}
        </div>
      </form>

      <button type="submit" onClick={handleCreate} className={style.btn}>
        Crear Pokemon
      </button>

      <div className={style.divP}>
        {errors.nombre && <p className={style.p}>{errors.nombre}</p>}
        <br />
        {errors.imagen && <p className={style.p}>{errors.imagen}</p>}
        <br />
        {errors.vida && <p className={style.p}>{errors.vida}</p>}
        <br />
        {errors.ataque && <p className={style.p}>{errors.ataque}</p>}
        <br />
        {errors.defensa && <p className={style.p}>{errors.defensa}</p>}
        <br />
        {errors.velocidad && <p className={style.p}>{errors.velocidad}</p>}
        <br />
        {errors.altura && <p className={style.p}>{errors.altura}</p>}
        <br />
        {errors.peso && <p className={style.p}>{errors.peso}
        </p>}
      </div>
    </div>
  );
};

export default Form;
