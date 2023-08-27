import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../src/components/Landing page/LandingPage"
import HomePage from "../src/components/Home/HomePage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage/> } />
      </Routes>
    </div>
  );
}

export default App;
