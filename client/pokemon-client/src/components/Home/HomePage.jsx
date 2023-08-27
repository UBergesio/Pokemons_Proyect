import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import { addPoke, addTypes } from "../redux/actions";
import Cards from "../Cards/Cards";

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
      <h2>Soy la HomePage</h2>
      <Cards allPokemons={allPokemons} allTypes={allTypes} />
    </div>
  );
 };

export default HomePage;