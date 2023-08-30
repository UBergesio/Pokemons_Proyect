import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { addPokeName } from "../redux/actions";
import style from "./NavBar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState(null);

  const handleSearchResult = (result) => {
    setSearchResult(result);
  };

  const handleAddPokemonName = () => {
    if (searchResult) {
      dispatch(addPokeName(searchResult)); // Agregar el resultado a Redux
      setSearchResult(null); // Limpiar el resultado de búsqueda
    } else {
      alert("No hay pokemons con ese nombre");
    }
  };

  return (
    <div>
      <div className={style.containerBar}>
        <SearchBar handleSearchResult={handleSearchResult} />
      </div>
      {searchResult && (
        <div className={style.container2}>
          <div className={style.container}>
            <h2 className={style.nombres}>{searchResult.nombre}</h2>
            <img
              className={style.image}
              src={searchResult.imagen}
              alt={searchResult.nombre}
            />
            <h2 className={style.descriptionOrigin}>
              {" "}
              Tipos: {searchResult.tipos}
            </h2>
          </div>
          <button className={style.btn} onClick={handleAddPokemonName}>
            Agregar a la lista
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
