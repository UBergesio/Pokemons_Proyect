/* import Card from "../Card/Card";

export default function Cards({ allPokemons, allTypes }) {
  return (
    <div>
      {allPokemons.map((pokemon) => {
        const { nombre, imagen, tipos } = pokemon;
        return <Card nombre={nombre} imagen={imagen} tipos={tipos} />;
      })}
      {allTypes.map((tipo) => {
        const { type } = tipo;
        return <Card tipos={type}/>
        
      })}
    </div>
  );
} */

/* import React from "react";
import Card from "../Card/Card";

export default function Cards({ allPokemons, allTypes }) {
  return (
    <div>
      {allPokemons.map((pokemon) => {
        const { nombre, imagen, tipos } = pokemon;

        // Obtener los nombres de los tipos correspondientes
        const pokemonTypes = tipos.map((typeId) => {
          const type = allTypes.find((t) => t.id === typeId);
          return type && type.nombre;
        });

        return <Card nombre={nombre} imagen={imagen} tipos={pokemonTypes} />;
      })}
    </div>
  );
} */

/* import React from "react";
import Card from "../Card/Card";

export default function Cards({ allPokemons, allTypes }) {
  return (
    <div>
      {allPokemons.map((pokemon) => {
        const { nombre, imagen, tipos } = pokemon;

        // Verificar si tipos no es undefined antes de usar map
        const pokemonTypes =
          tipos &&
          tipos.map((typeId) => {
            const type = allTypes.find((t) => t.id === typeId);
            return type && type.nombre;
          });

        return (
          <Card nombre={nombre} imagen={imagen} tipos={pokemonTypes || []} />
        );
      })}
    </div>
  );
} */

import React from "react";
import Card from "../Card/Card";

export default function Cards({ allPokemons, allTypes }) {
  return (
    <div>
      {allPokemons.map((pokemon) => {
        const {id, nombre, imagen, tipos } = pokemon;

        // Obtener los nombres de los tipos correspondientes
        const pokemonTypes = tipos.map((typeId) => {
          const type = allTypes.find((t) => t.id === parseInt(typeId));
          return type && type.nombre;
        });

        return (
          <Card
            key={id}
            nombre={nombre}
            imagen={imagen}
            tipos={pokemonTypes.join(", ")}
          />
        );
      })}
    </div>
  );
}