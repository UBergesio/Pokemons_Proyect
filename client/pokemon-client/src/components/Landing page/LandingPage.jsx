import style from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { addPoke, addTypes } from "../redux/actions";
import { useDispatch } from "react-redux";



const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Llamada a la acción para obtener los datos de los Pokémon
    dispatch(addTypes());
    dispatch(addPoke());
  }, [dispatch]);
  return (
    <div className={style.content}>
      <Link to="/home">
        <button className={style.botones}>INGRESAR</button>
      </Link>
    </div>
  );
};

export default LandingPage;
