import axios from "axios";
const API_URL = (process.env.REACT_APP_API_BASE_URL || "http://localhost:5001") + "/api/v1";

export const getFavorites = async (userId) => {
  const res = await axios.get(`${API_URL}/favorites/${userId}`);
  return res.data;
};

export const updateFavorites = async (userId, favorites) => {
  const res = await axios.put(`${API_URL}/favorites`, {
    _id: userId,
    favorites,
  });
  return res.data;
}; 