import GameCard from "../components/GameCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchGames, getPopularGames } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null); //pour stocker n'importe quel erreur potentiel
  const [loading, setLoading] = useState(true); //pour stocker les état de chargement

  useEffect(() => {
    const loadPopularGames = async () => {
      try {
        const popularGames = await getPopularGames();
        setGames(popularGames);
      } catch (e) {
        console.log(e);
        setError("Failed to load games");
      } finally {
        setLoading(false);
      }
    };
    loadPopularGames();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    setLoading(true);
    setError(null);

    try {
      const results = query
        ? await searchGames(query)
        : await getPopularGames();
      setGames(results);
    } catch (e) {
      console.log(e);
      setError("Failed to load games");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for games..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">loading...</div>
      ) : games.length === 0 ? (
        <div className="loading">No games found for “{searchQuery}”</div>
      ) : (
        <div className="games-grid">
          {games.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
