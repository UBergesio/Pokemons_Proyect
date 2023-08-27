import React from "react";

export default function Card(props) {
  return (
    <div className="pokemon-card">
      <h2>{props.nombre}</h2>
      <img src={props.imagen} alt={props.nombre} />
      <p>Tipos: {props.tipos}</p>
    </div>
  );
}