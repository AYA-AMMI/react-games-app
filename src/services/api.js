const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api";

const fetchGames = async (endpoint, params = {}) => {
  const query = new URLSearchParams({ key: API_KEY, page_size: 20, ...params });
  const response = await fetch(`${BASE_URL}${endpoint}?${query}`);
  if (!response.ok) throw new Error(`RAWG error ${response.status}`);
  const data = await response.json();
  return data.results;
};

export const getPopularGames = () =>
  fetchGames("/games", { ordering: "-added" });

export const searchGames = (query) => fetchGames("/games", { search: query });
