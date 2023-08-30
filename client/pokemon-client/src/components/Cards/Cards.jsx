import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ allPokemons, allTypes }) {
  return (
    <div className={style.container}>
      {allPokemons &&
        allPokemons.map((pokemon) => {
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
