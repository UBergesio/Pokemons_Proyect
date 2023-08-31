import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addPoke, addTypes, setPage } from "../redux/actions";
import Cards from "../Cards/Cards";
import NavBar from "../Navbar/NavBar";
import Pagination from "../Pagination/pagination";

const HomePage = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.allTypes);
  const allPokemons = useSelector((state) => state.allPokemons);
  const currentPage = useSelector((state) => state.currentPage);
  const pokemonsPerPage = useSelector((state) => state.pokemonsPerPage);

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  useEffect(() => {
    // Llamada a la acción para obtener los datos de los Pokémon
    dispatch(addTypes());
    dispatch(addPoke());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Cards allPokemons={currentPokemons} allTypes={allTypes} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(allPokemons.length / pokemonsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
