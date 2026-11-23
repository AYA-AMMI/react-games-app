const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const fetchMovies = async (endpoint, params = {}) => {
  const query = new URLSearchParams({ api_key: API_KEY, ...params });
  const response = await fetch(`${BASE_URL}${endpoint}?${query}`);
  if (!response.ok) throw new Error(`TMDB error ${response.status}`);
  const data = await response.json();
  return data.results;
};

export const getPopularMovies = () => fetchMovies("/movie/popular");
export const searchMovies = (query) => fetchMovies("/search/movie", { query });
