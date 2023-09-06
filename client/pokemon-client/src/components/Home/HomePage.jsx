import { useDispatch, useSelector } from "react-redux";
import { filterPoke, orderAttack, orderPoke, setPage } from "../redux/actions";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/pagination";
import style from "./HomePage.module.css";
import { useState } from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.allTypes);
  const allPokemons = useSelector((state) => state.allPokemons);
  const currentPage = useSelector((state) => state.currentPage);
  const pokemonsPerPage = useSelector((state) => state.pokemonsPerPage);
  const pokeFilter = useSelector((state)=> state.pokeFilter)

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  const currentFilter = pokeFilter.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  // eslint-disable-next-line no-unused-vars
  const [aux, setAux] = useState(false);
  const handleOrder = (event) => {
    dispatch(orderPoke(event.target.value));
    setAux(true);
  };

  // eslint-disable-next-line no-unused-vars
  const [auxAttack, setAuxAttack] = useState(false);
  const handleOrderAttack = (event) => {
    dispatch(orderAttack(event.target.value));
    setAuxAttack(true);
  };

  const handleType = (event) => {
    dispatch(filterPoke(event.target.value))
  }

  return (
    <div className={style.container}>
      <div className={style.order}>
        <h4>Orden alfabetico</h4>
        <select name="" id="" onChange={handleOrder}>
          <option value="A">A-Z</option>
          <option value="D">Z-A</option>
        </select>
        <h4>Ordenar por ataque</h4>
        <select name="" id="" onChange={handleOrderAttack}>
          <option value="A">Menor a mayor</option>
          <option value="D">Mayor a menor</option>
        </select>
        <h4>Filtrar por tipo</h4>
        <select name="" id="" onChange={handleType}>
          <option value="All">Mostrar todos</option>
          <option value="1">normal</option>
          <option value="2">fighting</option>
          <option value="3">flying</option>
          <option value="4">poison</option>
          <option value="5">ground</option>
          <option value="6">rock</option>
          <option value="7">bug</option>
          <option value="8">ghost</option>
          <option value="9">steel</option>
          <option value="10">fire</option>
          <option value="11">water</option>
          <option value="12">grass</option>
          <option value="13">electric</option>
          <option value="14">psychic</option>
          <option value="15">ice</option>
          <option value="16">dragon</option>
          <option value="17">dark</option>
          <option value="18">fairy</option>
          <option value="19">unknown</option>
          <option value="20">shadow</option>
        </select>
        <h4>Filtrar por creacion</h4>
        <select name="" id="" onChange={handleOrderAttack}>
          <option value="A">Mostrar todos</option>
          <option value="D">Mostrar creados</option>
        </select>
      </div>
      <Cards
        allPokemons={currentPokemons}
        allTypes={allTypes}
        pokeFilter={currentFilter}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(allPokemons.length / pokemonsPerPage)}
        totalPagesFilter={Math.ceil(pokeFilter.length / pokemonsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
