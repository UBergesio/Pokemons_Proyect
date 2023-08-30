import React from "react";
import style from "./Card.module.css"

export default function Card(props) {
  return (
    <div className={style.container}>
      <h2 className={style.nombres}>{props.nombre}</h2>
      <img className={style.image} src={props.imagen} alt={props.nombre} />
      <p className={style.descriptionOrigin}>Tipos: {props.tipos}</p>
    </div>
  );
}