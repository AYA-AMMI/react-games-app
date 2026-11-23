import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import { GameProvider } from "./contexts/GameProvider";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <GameProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </GameProvider>
  );
}

export default App;
