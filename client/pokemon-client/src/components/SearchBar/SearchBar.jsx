import axios from "axios";
import style from "./SearchBar.module.css";
import { useState } from "react";

const URL = "http://localhost:3001/pokemons/name";

const SearchBar = (props) => {
  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (event) => {
    setPokemonName(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${URL}?name=${pokemonName}`);
      const { data } = response;
      props.handleSearchResult(data); // Pasar el resultado al componente padre
    } catch (error) {
      console.error(error);
      window.alert("No existen pokemons con ese nombre");
    }
  };

  return (
    <div>
      <input
        placeholder= "Nombre del pokemon"
        className={style.container}
        type="search"
        value={pokemonName}
        onChange={handleChange}
      />
      <button className={style.btn} onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
