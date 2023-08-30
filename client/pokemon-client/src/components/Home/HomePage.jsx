import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addPoke, addTypes } from "../redux/actions";
import Cards from "../Cards/Cards";
import NavBar from "../Navbar/NavBar";

const HomePage = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.allTypes);
  const allPokemons = useSelector((state) => state.allPokemons);

  useEffect(() => {
    // Llamada a la acción para obtener los datos de los Pokémon
    dispatch(addTypes());
    dispatch(addPoke());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Cards allPokemons={allPokemons} allTypes={allTypes} />
    </div>
  );
};

export default HomePage;
