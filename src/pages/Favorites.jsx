import "../css/Favorites.css";
import { useGameContext } from "../contexts/GameContext";
import GameCard from "../components/GameCard";

function Favorites() {
  const { favorites } = useGameContext();
  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="games-grid">
          {favorites.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>No Favorite Games Yet</h2>
      <p>Start adding games to your favorites and they will appear here</p>
    </div>
  );
}
export default Favorites;
