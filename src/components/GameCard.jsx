import "../css/GameCard.css";
import { useGameContext } from "../contexts/GameContext";

function GameCard({ game }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useGameContext();

  const favorite = isFavorite(game.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(game.id);
    } else {
      addToFavorites(game);
    }
  }

  return (
    <div className="game-card">
      <div className="game-poster">
        {game.background_image ? (
          <img src={game.background_image} alt={game.name} />
        ) : (
          <div className="poster-placeholder">No image</div>
        )}
        <div className="game-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          >
            ❤︎
          </button>
        </div>
      </div>
      <div className="game-info">
        <h3>{game.name}</h3>
        <p>
          {game.released?.split("-")[0]} · ⭐ {game.rating}
        </p>
      </div>
    </div>
  );
}

export default GameCard;
