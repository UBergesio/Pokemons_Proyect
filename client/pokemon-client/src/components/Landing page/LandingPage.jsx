import style from "./LandingPage.module.css"
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div className={style.content}>
      <Link to='/home'>
        <button className={style.botones}>INGRESAR</button>
      </Link>
    </div>
  );
 }

export default LandingPage;