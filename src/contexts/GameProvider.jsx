import { useState, useEffect } from "react";
import { GameContext } from "./GameContext";

const loadFavorites = () => {
  try {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return []; // JSON corrompu → on repart d'une liste vide
  }
};

export const GameProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(loadFavorites);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (game) => {
    setFavorites((prev) => [...prev, game]);
  };

  const removeFromFavorites = (gameId) => {
    setFavorites((prev) => prev.filter((game) => game.id !== gameId));
  };

  const isFavorite = (gameId) => {
    return favorites.some((game) => game.id === gameId);
  };

  const value = { favorites, addToFavorites, removeFromFavorites, isFavorite };

  return (
    <GameContext.Provider value={value}>{children}</GameContext.Provider>
  );
};
