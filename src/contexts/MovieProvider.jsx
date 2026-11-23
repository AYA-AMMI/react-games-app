import { useState, useEffect } from "react";
import { MovieContext } from "./MovieContext";

const loadFavorites = () => {
  try {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return []; // JSON corrompu → on repart d'une liste vide
  }
};

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(loadFavorites);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = { favorites, addToFavorites, removeFromFavorites, isFavorite };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
