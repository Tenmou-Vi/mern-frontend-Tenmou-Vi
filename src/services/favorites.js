import axios from "axios";
const API_URL = (process.env.REACT_APP_API_BASE_URL || "http://localhost:5001") + "/api/v1";

export const getFavorites = async (userId) => {
  console.log("🔍 [getFavorites] Getting favorites for user:", userId);
  console.log("🔍 [getFavorites] API URL:", `${API_URL}/favorites/${userId}`);
  const res = await axios.get(`${API_URL}/favorites/${userId}`);
  console.log("🔍 [getFavorites] Response:", res.data);
  return res.data;
};

export const updateFavorites = async (userId, favorites) => {
  const res = await axios.put(`${API_URL}/favorites`, {
    userId: userId,
    favorites,
  });
  return res.data;
};

export const getFavoriteMovies = async (userId) => {
  try {
    console.log("🔍 [getFavoriteMovies] Starting for user:", userId);
    
    // First get the user's favorite movie IDs
    const favoritesData = await getFavorites(userId);
    const favoriteIds = favoritesData.favorites || [];
    
    console.log("🔍 [getFavoriteMovies] Got favorite IDs:", favoriteIds);
    
    if (favoriteIds.length === 0) {
      console.log("🔍 [getFavoriteMovies] No favorites found");
      return [];
    }
    
    // Then get the full movie details for each favorite
    const moviePromises = favoriteIds.map(async (movieId) => {
      try {
        console.log("🔍 [getFavoriteMovies] Fetching movie:", movieId);
        const res = await axios.get(`${API_URL}/movies/id/${movieId}`);
        console.log("🔍 [getFavoriteMovies] Movie data:", res.data);
        return res.data;
      } catch (error) {
        console.error(`❌ Error fetching movie ${movieId}:`, error);
        return null;
      }
    });
    
    const movies = await Promise.all(moviePromises);
    const validMovies = movies.filter(movie => movie !== null);
    console.log("🔍 [getFavoriteMovies] Final movies:", validMovies);
    return validMovies;
  } catch (error) {
    console.error('❌ Error fetching favorite movies:', error);
    return [];
  }
}; 