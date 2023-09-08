import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "../src/components/Landing page/LandingPage"
import HomePage from "../src/components/Home/HomePage"
import Detail from "./components/Detail/Detail";
import NavBar from "./components/Navbar/NavBar";
import Form from "./components/Form/Form";
import types from "./components/Form/Types";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="App">
      {currentPath !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:name" element={<Detail />} />
        <Route path="/form" element={<Form types={types} />} />
      </Routes>
    </div>
  );
}

export default App;
