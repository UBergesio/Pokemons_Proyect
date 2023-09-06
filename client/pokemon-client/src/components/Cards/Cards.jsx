import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";


export default function Cards({ allPokemons, allTypes, pokeFilter }) {
  let pokemonListToRender;

  if (pokeFilter.length > 0) {
    pokemonListToRender = pokeFilter;
  } else {
    pokemonListToRender = allPokemons;
  }

  return (
    <div className={style.container}>
      {pokemonListToRender.map((pokemon) => {
        const { id, nombre, imagen, tipos } = pokemon;

        const pokemonTypes = [];
        if (Array.isArray(tipos)) {
          tipos.forEach((typeId) => {
            const type = allTypes.find((t) => t.id === parseInt(typeId));
            if (type) {
              pokemonTypes.push(type.nombre);
            }
          });
        }

        return (
          <Card
            key={id}
            nombre={nombre}
            imagen={imagen}
            tipos={pokemonTypes.join(", ") || tipos}
          />
        );
      })}
    </div>
  );
}