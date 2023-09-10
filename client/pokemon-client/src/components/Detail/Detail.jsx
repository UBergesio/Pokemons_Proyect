import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const URL = "http://localhost:3001/pokemons/name";
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const { data } = await axios.get(`${URL}?name=${name}`);
        if (data.nombre) {
          setPokemon(data);
        } else {
          window.alert("No se puede mostrar el detalle en este momento");
        }
      } catch (error) {
        console.error("Error al cargar los datos del Pokémon", error);
      }
    }

    fetchPokemon();
  }, [name]);

  const renderizarPersonaje = (propertyName, propertyValue) => {
    if (propertyValue == null) {
      return null;
    }
    return (
      <div>
        <strong>{propertyName}: </strong>
        {propertyValue}
      </div>
    );
  };

  let tiposAVisualizar = [];
  if (pokemon.tipos) {
    tiposAVisualizar = pokemon.tipos;
  } else if (pokemon.Pokemon_types) {
    tiposAVisualizar = pokemon.Pokemon_types.map((tipo) => tipo.nombre).join(
      ", "
    );
  }

  return (
    <div className={style.divBackGround}>
      <img className={style.img} src={pokemon.imagen} alt={pokemon.nombre} />
      <div className={style.containerTexto}>
        <h6 className={style.id}>ID: {pokemon.id}</h6>
        <h2 className={style.titulo}>{pokemon.nombre}</h2>
        <h3 className={style.description}>Vida: {pokemon.vida}</h3>
        <h3 className={style.description}>Ataque: {pokemon.ataque}</h3>
        <h3 className={style.description}>Defensa: {pokemon.defensa}</h3>
        <h3 className={style.description}>
          {renderizarPersonaje("Velocidad", pokemon.velocidad)}
        </h3>
        <h3 className={style.description}>
          {renderizarPersonaje("Altura", pokemon.altura)}
        </h3>
        <h3 className={style.description}>
          {renderizarPersonaje("Peso", pokemon.peso)}
        </h3>
        <h3 className={style.description}>
          {renderizarPersonaje("Tipos", tiposAVisualizar)}
        </h3>
      </div>
    </div>
  );
};

export default Detail;
