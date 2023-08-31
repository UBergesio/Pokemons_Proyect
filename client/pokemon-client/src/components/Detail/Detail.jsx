import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const URL = "http://localhost:3001/pokemons/name";
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(`${URL}?name=${name}`).then(({ data }) => {
      if (data.nombre) {
        setPokemon(data);
      } else {
        window.alert("No se puede mostrar el detalle en este momento");
      }
    });
    return setPokemon({});
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

  return (
    <div>
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
        <h3 className={style.description}>Tipos: {pokemon.tipos}</h3>
      </div>
    </div>
  );
};

export default Detail;
