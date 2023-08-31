import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../src/components/Landing page/LandingPage"
import HomePage from "../src/components/Home/HomePage"
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:name" element={<Detail/> } />
      </Routes>
    </div>
  );
}

export default App;
