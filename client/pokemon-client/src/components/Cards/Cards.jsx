import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useDispatch } from "react-redux";
import { remove } from "../redux/actions";

export default function Cards({ allPokemons, allTypes, pokeFilter }) {
const dispatch = useDispatch();

  const onClose = (id)=>{
    dispatch(remove(id))
  }

  let pokemonListToRender;

  if (pokeFilter.length > 0) {
    pokemonListToRender = pokeFilter;
  } else {
    pokemonListToRender = allPokemons;
  }


  return (
    <div className={style.container}>
      {pokemonListToRender.map((pokemon) => {
        const { id, nombre, imagen, tipos, Pokemon_types } = pokemon;

        let pokemonTypes = [];
        if (Array.isArray(tipos)) {
          tipos.forEach((typeId) => {
            const type = allTypes.find((t) => t.id === parseInt(typeId));
            if (type) {
              pokemonTypes.push(type.nombre);
            }
          });
        }

        if(pokemonTypes.length === 0){
          pokemonTypes = Pokemon_types?.map((tipo) => tipo.nombre)
        }

        return (
          <Card
            onClose={onClose}
            key={id}
            id={id}
            nombre={nombre}
            imagen={imagen}
            tipos={pokemonTypes.join(", ") || tipos}
          />
        );
      })}
    </div>
  );
}